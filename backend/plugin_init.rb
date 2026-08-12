# Require your custom files here
require_relative 'lib/job_runners/batch_import_runner'
require_relative 'converters/lib/marcxml_auth_agent_base_map.rb'

# Log initialization to the ArchivesSpace backend log
ArchivesSpaceService.loaded_hook do
  Log.info("Loaded custom extensions from as-fit-plugin")
end
