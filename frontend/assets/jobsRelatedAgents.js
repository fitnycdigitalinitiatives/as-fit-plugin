//= require form

var init = function () {
  
  var hideImportRelatedAgentsOption = function () {
    $('#js-import-related_agents').hide();

    $('#job_import_type_').change(function () {
      if ($('#job_import_type_').val() == 'marcxml_auth_agent') {
        $('#js-import-related_agents').show();
      } else {
        $('#js-import-related_agents').hide();
      }
    });
  };

  hideImportRelatedAgentsOption();
};

$(init);
