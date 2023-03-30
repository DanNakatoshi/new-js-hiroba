<template>
  <MonacoEditor
    lang="javascript"
    v-model="value"
    :options="{
      theme: 'vs-dark',
      minimap: { enabled: false },
      fontSize: 16,
      scrollBeyondLastLine: false,
      automaicLayout: true,
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
    }"
  />
</template>

<script>
const value = ref('');
</script>

<style>
.monaco-editor {
  min-height: 800px;
  width: 100svw;
}
</style>
