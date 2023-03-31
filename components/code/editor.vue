<template>
  <TabView>
    <TabPanel header="JavaScript">
      <MonacoEditor
        class="monaco-editor-container"
        lang="javascript"
        v-model="valueJS"
        :options="monacoConfig"
      />
      <Button @click="runJavaScript">Run</Button>
    </TabPanel>
    <TabPanel header="HTML">
      <MonacoEditor
        class="monaco-editor-container"
        lang="html"
        v-model="valueHTML"
        :options="monacoConfig"
      />
    </TabPanel>
    <TabPanel header="CSS">
      <MonacoEditor
        class="monaco-editor-container"
        lang="css"
        v-model="valueCSS"
        :options="monacoConfig"
      />
    </TabPanel>
    <TabPanel header="Console"> log </TabPanel>
    <TabPanel header="Result">
      <!-- <iframe :src="result" frameborder="0"></iframe> -->
      <iframe :srcdoc="result" frameborder="0"></iframe>
      <!-- <span v-html="result"></span> -->
    </TabPanel>
  </TabView>
</template>

<script setup>
const valueJS = ref(`
const a = 1;
const b = 2;
const c = a + b;
console.log(c);
`);

const valueHTML = ref(`
<div>
  <h1>Hello World</h1>
</div>
`);

const valueCSS = ref(
  `
h1 {
  color: red;
}
div {
  background-color: blue;
}
`
);

const result = computed(() => {
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

function runJavaScript() {
  eval(valueJS.value);
  console.log(valueJS.value);
}
</script>

<style>
.monaco-editor-container {
  display: flex !important;
  min-height: 530px;
  min-width: 50%;
  width: 100% !important;
}
</style>
