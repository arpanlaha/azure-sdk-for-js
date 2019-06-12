/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/componentsMappers";
import * as Parameters from "../models/parameters";
import { ApplicationInsightsManagementClientContext } from "../applicationInsightsManagementClientContext";

/** Class representing a Components. */
export class Components {
  private readonly client: ApplicationInsightsManagementClientContext;

  /**
   * Create a Components.
   * @param {ApplicationInsightsManagementClientContext} client Reference to the service client.
   */
  constructor(client: ApplicationInsightsManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a list of all Application Insights components within a subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.ComponentsListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.ComponentsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.ApplicationInsightsComponentListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationInsightsComponentListResult>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ApplicationInsightsComponentListResult>, callback?: msRest.ServiceCallback<Models.ApplicationInsightsComponentListResult>): Promise<Models.ComponentsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ComponentsListResponse>;
  }

  /**
   * Gets a list of Application Insights components within a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param [options] The optional parameters
   * @returns Promise<Models.ComponentsListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.ComponentsListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.ApplicationInsightsComponentListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationInsightsComponentListResult>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ApplicationInsightsComponentListResult>, callback?: msRest.ServiceCallback<Models.ApplicationInsightsComponentListResult>): Promise<Models.ComponentsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.ComponentsListByResourceGroupResponse>;
  }

  /**
   * Deletes an Application Insights component.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, resourceName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, resourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Returns an Application Insights component.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.ComponentsGetResponse>
   */
  get(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase): Promise<Models.ComponentsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param callback The callback
   */
  get(resourceGroupName: string, resourceName: string, callback: msRest.ServiceCallback<Models.ApplicationInsightsComponent>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, resourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationInsightsComponent>): void;
  get(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ApplicationInsightsComponent>, callback?: msRest.ServiceCallback<Models.ApplicationInsightsComponent>): Promise<Models.ComponentsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ComponentsGetResponse>;
  }

  /**
   * Creates (or updates) an Application Insights component. Note: You cannot specify a different
   * value for InstrumentationKey nor AppId in the Put operation.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param insightProperties Properties that need to be specified to create an Application Insights
   * component.
   * @param [options] The optional parameters
   * @returns Promise<Models.ComponentsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, resourceName: string, insightProperties: Models.ApplicationInsightsComponent, options?: msRest.RequestOptionsBase): Promise<Models.ComponentsCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param insightProperties Properties that need to be specified to create an Application Insights
   * component.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, resourceName: string, insightProperties: Models.ApplicationInsightsComponent, callback: msRest.ServiceCallback<Models.ApplicationInsightsComponent>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param insightProperties Properties that need to be specified to create an Application Insights
   * component.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, resourceName: string, insightProperties: Models.ApplicationInsightsComponent, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationInsightsComponent>): void;
  createOrUpdate(resourceGroupName: string, resourceName: string, insightProperties: Models.ApplicationInsightsComponent, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ApplicationInsightsComponent>, callback?: msRest.ServiceCallback<Models.ApplicationInsightsComponent>): Promise<Models.ComponentsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        insightProperties,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.ComponentsCreateOrUpdateResponse>;
  }

  /**
   * Updates an existing component's tags. To update other fields use the CreateOrUpdate method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param componentTags Updated tag information to set into the component instance.
   * @param [options] The optional parameters
   * @returns Promise<Models.ComponentsUpdateTagsResponse>
   */
  updateTags(resourceGroupName: string, resourceName: string, componentTags: Models.TagsResource, options?: msRest.RequestOptionsBase): Promise<Models.ComponentsUpdateTagsResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param componentTags Updated tag information to set into the component instance.
   * @param callback The callback
   */
  updateTags(resourceGroupName: string, resourceName: string, componentTags: Models.TagsResource, callback: msRest.ServiceCallback<Models.ApplicationInsightsComponent>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param componentTags Updated tag information to set into the component instance.
   * @param options The optional parameters
   * @param callback The callback
   */
  updateTags(resourceGroupName: string, resourceName: string, componentTags: Models.TagsResource, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationInsightsComponent>): void;
  updateTags(resourceGroupName: string, resourceName: string, componentTags: Models.TagsResource, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ApplicationInsightsComponent>, callback?: msRest.ServiceCallback<Models.ApplicationInsightsComponent>): Promise<Models.ComponentsUpdateTagsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        componentTags,
        options
      },
      updateTagsOperationSpec,
      callback) as Promise<Models.ComponentsUpdateTagsResponse>;
  }

  /**
   * Purges data in an Application Insights component by a set of user-defined filters.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param body Describes the body of a request to purge data in a single table of an Application
   * Insights component
   * @param [options] The optional parameters
   * @returns Promise<Models.ComponentsPurgeResponse>
   */
  purge(resourceGroupName: string, resourceName: string, body: Models.ComponentPurgeBody, options?: msRest.RequestOptionsBase): Promise<Models.ComponentsPurgeResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param body Describes the body of a request to purge data in a single table of an Application
   * Insights component
   * @param callback The callback
   */
  purge(resourceGroupName: string, resourceName: string, body: Models.ComponentPurgeBody, callback: msRest.ServiceCallback<Models.ComponentPurgeResponse>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param body Describes the body of a request to purge data in a single table of an Application
   * Insights component
   * @param options The optional parameters
   * @param callback The callback
   */
  purge(resourceGroupName: string, resourceName: string, body: Models.ComponentPurgeBody, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ComponentPurgeResponse>): void;
  purge(resourceGroupName: string, resourceName: string, body: Models.ComponentPurgeBody, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ComponentPurgeResponse>, callback?: msRest.ServiceCallback<Models.ComponentPurgeResponse>): Promise<Models.ComponentsPurgeResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        body,
        options
      },
      purgeOperationSpec,
      callback) as Promise<Models.ComponentsPurgeResponse>;
  }

  /**
   * Get status for an ongoing purge operation.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param purgeId In a purge status request, this is the Id of the operation the status of which is
   * returned.
   * @param [options] The optional parameters
   * @returns Promise<Models.ComponentsGetPurgeStatusResponse>
   */
  getPurgeStatus(resourceGroupName: string, resourceName: string, purgeId: string, options?: msRest.RequestOptionsBase): Promise<Models.ComponentsGetPurgeStatusResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param purgeId In a purge status request, this is the Id of the operation the status of which is
   * returned.
   * @param callback The callback
   */
  getPurgeStatus(resourceGroupName: string, resourceName: string, purgeId: string, callback: msRest.ServiceCallback<Models.ComponentPurgeStatusResponse>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param purgeId In a purge status request, this is the Id of the operation the status of which is
   * returned.
   * @param options The optional parameters
   * @param callback The callback
   */
  getPurgeStatus(resourceGroupName: string, resourceName: string, purgeId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ComponentPurgeStatusResponse>): void;
  getPurgeStatus(resourceGroupName: string, resourceName: string, purgeId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ComponentPurgeStatusResponse>, callback?: msRest.ServiceCallback<Models.ComponentPurgeStatusResponse>): Promise<Models.ComponentsGetPurgeStatusResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        purgeId,
        options
      },
      getPurgeStatusOperationSpec,
      callback) as Promise<Models.ComponentsGetPurgeStatusResponse>;
  }

  /**
   * Gets a list of all Application Insights components within a subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ComponentsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ComponentsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ApplicationInsightsComponentListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationInsightsComponentListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ApplicationInsightsComponentListResult>, callback?: msRest.ServiceCallback<Models.ApplicationInsightsComponentListResult>): Promise<Models.ComponentsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.ComponentsListNextResponse>;
  }

  /**
   * Gets a list of Application Insights components within a resource group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ComponentsListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ComponentsListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ApplicationInsightsComponentListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationInsightsComponentListResult>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ApplicationInsightsComponentListResult>, callback?: msRest.ServiceCallback<Models.ApplicationInsightsComponentListResult>): Promise<Models.ComponentsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.ComponentsListByResourceGroupNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Insights/components",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationInsightsComponentListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationInsightsComponentListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationInsightsComponent
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "insightProperties",
    mapper: {
      ...Mappers.ApplicationInsightsComponent,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationInsightsComponent
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateTagsOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "componentTags",
    mapper: {
      ...Mappers.TagsResource,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationInsightsComponent
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const purgeOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/purge",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "body",
    mapper: {
      ...Mappers.ComponentPurgeBody,
      required: true
    }
  },
  responses: {
    202: {
      bodyMapper: Mappers.ComponentPurgeResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getPurgeStatusOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/operations/{purgeId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.purgeId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ComponentPurgeStatusResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationInsightsComponentListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationInsightsComponentListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
