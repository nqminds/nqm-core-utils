
module.exports = (function() {
  var isResourceType = function(resource, type) {
    return resource.schemaDefinition ? (resource.schemaDefinition.id === type || (resource.schemaDefinition.basedOn && resource.schemaDefinition.basedOn.indexOf(type) >= 0)) : resource.baseType === type;
  };

  return {
    isResourceType: isResourceType
  }
}());