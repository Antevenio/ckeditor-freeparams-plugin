(function() {

  var isArray = function(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  };

  var addRichCombo = function(id, editor, freeparams) {
    editor.ui.addRichCombo(id, {
      label: freeparams.label,
      title: freeparams.title,
      toolbar: (freeparams.toolbar || 'paragraph'),
      multiSelect: false,
      panel: {
        css: [
          editor.config.contentsCss,
          CKEDITOR.getUrl(CKEDITOR.skin.getPath('editor') + 'editor.css')
        ],
        multiSelect: false
      },
      init: function() {
        var nGroups = freeparams.groups.length,
          nValues, i, j, group, value;
        for (i = 0; i < nGroups; i++) {
          group = freeparams.groups[i];
          this.startGroup(group.label);
          nValues = group.values.length;
          for (j = 0; j < nValues; j++) {
            value = group.values[j];
            this.add(value.value, value.label, value.label);
          }
        }
      },
      onClick: function(value) {
        editor.insertHtml(value);
      }
    });
  };

  CKEDITOR.plugins.add('freeparams', {
    requires: ['richcombo'],
    init: function(editor) {
      var freeparamsConfig = editor.config.freeparams;
      if (!isArray(freeparamsConfig)) {
        freeparamsConfig = [];
        freeparamsConfig.push(editor.config.freeparams);
      }
      for (var i = 0, l = freeparamsConfig.length; i < l; i++) {
        addRichCombo('freeparams' + i, editor, freeparamsConfig[i]);
      }
    }
  });
})();
