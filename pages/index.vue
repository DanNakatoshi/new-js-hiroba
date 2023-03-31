<template>
  Welcome to the code editor
  <Splitter
    style="height: 800px"
    class="mb-5"
  >
    <SplitterPanel class="flex ">
      <MonacoEditor
        class="monaco-editor-container"
        lang="javascript"
        :options="monacoConfig"
      />
    </SplitterPanel>
    <SplitterPanel class="">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio ab veniam
      provident similique natus quia repudiandae? Rerum omnis velit veniam sunt
      doloribus ipsa aspernatur suscipit at, repellendus odio aperiam alias
      dignissimos odit blanditiis soluta voluptatum id quia amet natus
      perferendis beatae architecto! Quo, perferendis ullam. Blanditiis quaerat
      minima, tempora voluptatem perspiciatis enim totam non soluta
      voluptatibus. Dolore eos dolorum iure blanditiis sunt ex. Illum aperiam
      numquam tempora alias aliquam voluptate culpa optio voluptas eligendi
      atque! Quis soluta fuga cum modi consequatur maxime sit esse aut doloribus
      laudantium, repudiandae molestias dicta nemo harum enim! Unde eaque rem
      consequatur autem ipsum illum magnam doloribus obcaecati commodi esse quam
      corrupti sapiente atque, delectus error ea enim dolore excepturi quisquam
      at? Assumenda quae aliquam consectetur pariatur adipisci optio. Quos
      similique impedit aspernatur aut fugit neque. Quibusdam repudiandae, nobis
      eum voluptas velit non sapiente perferendis dolores consequatur veritatis
      aspernatur natus nesciunt atque excepturi quis saepe temporibus laboriosam
      earum sequi quae officia dicta! Commodi sed deserunt voluptas rerum
      obcaecati placeat impedit doloribus at necessitatibus facilis esse error,
      praesentium sunt dolorem sapiente aperiam exercitationem nam, ex mollitia
      laborum. Illum, minima eligendi unde laudantium nesciunt porro. Esse nulla
      voluptas id vel saepe debitis nihil quidem vitae cum et ullam
      exercitationem neque earum praesentium, tempora a ad dolore tempore
      dolores laborum. Alias eveniet sunt nesciunt deserunt quasi, officia sint?
      Quisquam quaerat eveniet asperiores esse sapiente fuga laboriosam nemo
      quam assumenda odit? Labore, error itaque fuga laboriosam facilis ratione
      quas officiis, laudantium vel voluptas excepturi iste quaerat inventore
      earum ipsum repudiandae aliquam nam. Ab iste ullam quaerat dicta nulla
      molestias enim ducimus adipisci natus, blanditiis id ex sunt consequatur
      deserunt totam, illo nobis esse ea nam aut. Ipsa deleniti nulla soluta
      facilis porro reprehenderit totam, similique quidem architecto eaque!
      Aliquid reprehenderit nobis corporis veritatis incidunt quod error
      doloremque adipisci sapiente?
    </SplitterPanel>
  </Splitter>
</template>


<script setup>
const monacoConfig = {
  theme: 'vs-dark',
  minimap: { enabled: false },
  fontSize: 16,
  scrollBeyondLastLine: false,
  automaticLayout: false,
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