<template>
  <div class="lg:hidden">
    <div class="flex">
      <div
        @click="openTab(0)"
        class="editor-tab flex justify-content-center py-2 px-3 mr-1"
      >
        HTML
      </div>
      <div
        @click="openTab(1)"
        class="editor-tab flex justify-content-center py-2 px-3 mr-1"
      >
        CSS
      </div>
      <div
        @click="openTab(2)"
        class="editor-tab flex justify-content-center py-2 px-3 mr-1"
      >
        JS
      </div>
      <div
        @click="openTab(3)"
        class="editor-tab flex justify-content-center py-2 px-3 "
      >
        Result
      </div>
    </div>
    <!-- <Button @click="openTab(0)">HTML</Button>
    <Button @click="openTab(1)">CSS</Button>
    <Button @click="openTab(2)">JS</Button>
    <Button @click="openTab(3)">Result</Button> -->
  </div>

  <div class="grid">
    <div
      class="lg:col-4 col-12 lg:block"
      :class="[activeTab === 0 ? '' : 'hidden']"
    >
      <div class="editor-tab hidden lg:block editor-tab--desktop">HTML</div>
      <MonacoEditor
        class="monaco-editor-container"
        lang="html"
        v-model="valueHTML"
        :options="monacoConfig"
      />
    </div>
    <div
      class="lg:col-4 col-12 lg:block"
      :class="[activeTab === 1 ? '' : 'hidden']"
    >
      <div class="editor-tab hidden lg:block editor-tab--desktop">CSS</div>

      <MonacoEditor
        class="monaco-editor-container"
        lang="css"
        v-model="valueCSS"
        :options="monacoConfig"
      />
    </div>
    <div
      class="lg:col-4 col-12 lg:block"
      :class="[activeTab === 2 ? '' : 'hidden']"
    >
      <div class="editor-tab hidden lg:block editor-tab--desktop">JS</div>

      <MonacoEditor
        class="monaco-editor-container"
        lang="javascript"
        v-model="valueJS"
        :options="monacoConfig"
      />
    </div>
    <div
      class="col-12 lg:block"
      :class="[activeTab === 3 ? '' : 'hidden']"
    >
      <div class="editor-tab hidden lg:block editor-tab--desktop">Result</div>

      <div class="iframe-container">
        <iframe
          :srcdoc="iframeDoc"
          frameborder="0"
          class="iframe-result h-full w-full"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const activeTab = ref(0);

function openTab(index) {
  activeTab.value = index;
}

const valueJS = ref(`
const i = 5
`);

const valueHTML = ref(`
    <div class="wrapper">
        <div class="content">
            <h1 id="date" class="date">Date</h1>
            <h3 id="time" class="time"></h3>
        </div>
    </div>

`);

const valueCSS = ref(
  `

* {
    margin: 0;
    padding: 0;
}

html{
  background-color: #000;
}

`
);

const iframeDoc = computed(() => {
  return `
  <!DOCTYPE html>
    <html lang="en">
      <head>
        <style>
          ${valueCSS.value}
        </style>
      </head>
      <body>
        ${valueHTML.value}
        <script>${valueJS.value}<\/script>

      </body>
    </html>
`;
});

const monacoConfig = {
  theme: 'vs-dark',
  minimap: { enabled: false },
  fontSize: 16,
  scrollBeyondLastLine: false,
  automaticLayout: true,
  wordWrap: 'on',
  wordWrapColumn: 80,
  wordWrapMinified: true,
  lineNumbers: 'on',
  lineNumbersMinChars: 3,
  lineDecorationsWidth: 10,
  lineHeight: 20,
  // glyphMargin: true,
  folding: true,
  renderLineHighlight: 'all',
  renderIndentGuides: true,
  renderFinalNewline: true,
  renderLineHighlightOnlyWhenFocus: true,
  renderValidationDecorations: 'on',
  cursorBlinking: 'blink',
  cursorSmoothCaretAnimation: true,
  cursorStyle: 'line',
};
</script>

<style lang="scss">
$editor-border-radius: 0px 5px 5px 5px;
$editor-min-height: 530px;

.monaco-editor-container {
  min-height: $editor-min-height;
  height: 530px;
  width: 100%;
}

.monaco-editor {
  border-radius: $editor-border-radius;
}

.overflow-guard {
  border-radius: $editor-border-radius;
}

.iframe-container {
  width: 100%;
  height: $editor-min-height;
  border: #1e1e1e 2px solid;
  border-radius: $editor-border-radius;
}

#iframe-result {
  width: 100svw;
  min-height: $editor-min-height;
  height: 800px;
  border: none;
}

.editor-tab {
  background-color: #1e1e1e;
  border-radius: 5px 5px 0 0;
  color: #fff;
  padding: 10px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
}

.editor-tab--desktop {
  width: 100px;
}
</style>
