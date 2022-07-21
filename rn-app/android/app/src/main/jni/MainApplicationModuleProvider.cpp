#include "MainApplicationModuleProvider.h"

#include <rncore.h>
#include <rncli.h>

namespace facebook {
namespace react {

std::shared_ptr<TurboModule> MainApplicationModuleProvider(
    const std::string &moduleName,
    const JavaTurboModule::InitParams &params) {
    // Module providers autolinked by RN CLI
    auto rncli_module = rncli_ModuleProvider(moduleName, params);
    if (rncli_module != nullptr) {
      return rncli_module;
    }
  return rncore_ModuleProvider(moduleName, params);
}

} // namespace react
} // namespace facebook
