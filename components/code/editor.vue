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
            <div class="iframe-container">
              <iframe
                :srcdoc="iframeDoc"
                frameborder="0"
                class="iframe-result h-full w-full"
                
              ></iframe>
            </div>
          </TabPanel>
          <TabPanel header="console"> </TabPanel>
        </TabView>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const valueJS = ref(`
var d = new Date();
var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

var date = document.getElementById("date");
var time = document.getElementById("time");

function getDate() {
    date.innerHTML = monthNames[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
}

function timer() {
    setTimeout(timer, 1000);
    var d = new Date();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var ampm = hours <= 11 ? 'am' : 'pm';
    var strTime = [hours % 12,
                  (minutes < 10 ? "0" + minutes : minutes)
                  ].join(':') + ampm;
    time.innerHTML = strTime;
    setTimeout(timer, 1000);
}

getDate();
timer();
`);

const valueHTML = ref(`
    <div class="wrapper">
        <div class="content">
            <h1 id="date" class="date"></h1>
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

body {
    background: #fff;
    font-family: lato,sans-serif;
    color: #bdc3c7;
}

.wrapper {
    width: 400px;
    margin: 10% auto;
}

.content {
    background: #fff;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    width: 400px;
}

.date, .time {
    color: #bdc3c7;
    font-weight: 300;
    font-size: 1.5em;
    padding: 20px;
}

.date {
    border-bottom: 2px solid #eee;
}

.time {
    font-size: 3em;
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

<style>
.monaco-editor-container {
  min-height: 530px;
  height: 530px;
}

.iframe-container {
  width: 100%;
  height: 530px;
}

#iframe-result {
  width: 100svw;
  min-height: 530px;
  height: 800px;
  border: none;
}
</style>
