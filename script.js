const Header = window.Header;

const editor = new EditorJS({
  holder: "editorjs",
  tools: {
    header: {
      class: Header,
      config: {
        levels: [1, 2, 3, 4, 5, 6],
        defaultLevel: 3,
      },
    },
  },
});
