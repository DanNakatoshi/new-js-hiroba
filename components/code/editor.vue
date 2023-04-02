<template>
  <div class="flex-row">
    <div class="flex flex-wrap">
      <div class="col-12 md:col-6">
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
        </TabView>
      </div>
      <div class="col-12 md:col-6">
        <TabView>
          <TabPanel header="Result">
            <iframe
              :srcdoc="result"
              frameborder="0"
              ref="iframeResult"
              id="iframe-result"
            ></iframe>
          </TabPanel>
        </TabView>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const iframeResult = ref(null);

const valueJS = ref(`
const a = 1;
const b = 2;
const c = a + b;
console.log(c);


let menu = document.getElementById('menu');

// create new li element
let li = document.createElement('li');
li.textContent = 'About Us';
// add it to the ul element
menu.appendChild(li);
`);

const valueHTML = ref(`
<div>
  <h1>Hello World</h1>
  <ul id="menu">
        <li>Home</li>
        <li>Services</li>
    </ul>
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

        <script>${valueJS.value}<\/script>
      </body>
    </html>
    `;
});

// function that saves the console.log result
function saveConsoleLog() {
  console.log(consoleResult.value);
}

// display console.log result in iframe

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

// const consoleResult = ref(null);
// function ConsoleLog() {
//   console.log = function (message) {
//     if (typeof message == 'object') {
//       consoleResult.value +=
//         (JSON && JSON.stringify ? JSON.stringify(message) : String(message)) +
//         '<br />';
//     } else {
//       consoleResult.value += message + '<br />';
//     }
//   };
// }

function runJavaScript() {
  // eval(valueJS.value);
  ConsoleLog(valueJS.value);
}

// onNuxtReady(() => {
//   var script = document.createElement('script');

//   script.innerHTML = valueJS.value;
//   console.log(document.body);
//   document.body.appendChild(script);

//   console.log(body);
// });
</script>

<style>
.monaco-editor-container {
  display: flex !important;
  min-height: 530px;
  min-width: 30px;
  width: 100% !important;
}

#iframe-result {
  width: 100%;
  height: 100%;
}
</style>
