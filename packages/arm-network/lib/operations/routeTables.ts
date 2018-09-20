/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as msRestAzure from "ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/routeTablesMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a RouteTables. */
export class RouteTables {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a RouteTables.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }


  /**
   * Deletes the specified route table.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} routeTableName The name of the route table.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  deleteMethod(resourceGroupName: string, routeTableName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName, routeTableName, options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Gets the specified route table.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} routeTableName The name of the route table.
   *
   * @param {RouteTablesGetOptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  get(resourceGroupName: string, routeTableName: string): Promise<Models.RouteTablesGetResponse>;
  get(resourceGroupName: string, routeTableName: string, options: Models.RouteTablesGetOptionalParams): Promise<Models.RouteTablesGetResponse>;
  get(resourceGroupName: string, routeTableName: string, callback: msRest.ServiceCallback<Models.RouteTable>): void;
  get(resourceGroupName: string, routeTableName: string, options: Models.RouteTablesGetOptionalParams, callback: msRest.ServiceCallback<Models.RouteTable>): void;
  get(resourceGroupName: string, routeTableName: string, options?: Models.RouteTablesGetOptionalParams, callback?: msRest.ServiceCallback<Models.RouteTable>): Promise<Models.RouteTablesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        routeTableName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.RouteTablesGetResponse>;
  }


  /**
   * Create or updates a route table in a specified resource group.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} routeTableName The name of the route table.
   *
   * @param {RouteTable} parameters Parameters supplied to the create or update route table
   * operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  createOrUpdate(resourceGroupName: string, routeTableName: string, parameters: Models.RouteTable, options?: msRest.RequestOptionsBase): Promise<Models.RouteTablesCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName, routeTableName, parameters, options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.RouteTablesCreateOrUpdateResponse>;
  }


  /**
   * Updates a route table tags.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} routeTableName The name of the route table.
   *
   * @param {TagsObject} parameters Parameters supplied to update route table tags.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  updateTags(resourceGroupName: string, routeTableName: string, parameters: Models.TagsObject, options?: msRest.RequestOptionsBase): Promise<Models.RouteTablesUpdateTagsResponse> {
    return this.beginUpdateTags(resourceGroupName, routeTableName, parameters, options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.RouteTablesUpdateTagsResponse>;
  }

  /**
   * Gets all route tables in a resource group.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  list(resourceGroupName: string): Promise<Models.RouteTablesListResponse>;
  list(resourceGroupName: string, options: msRest.RequestOptionsBase): Promise<Models.RouteTablesListResponse>;
  list(resourceGroupName: string, callback: msRest.ServiceCallback<Models.RouteTableListResult>): void;
  list(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RouteTableListResult>): void;
  list(resourceGroupName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.RouteTableListResult>): Promise<Models.RouteTablesListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.RouteTablesListResponse>;
  }

  /**
   * Gets all route tables in a subscription.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  listAll(): Promise<Models.RouteTablesListAllResponse>;
  listAll(options: msRest.RequestOptionsBase): Promise<Models.RouteTablesListAllResponse>;
  listAll(callback: msRest.ServiceCallback<Models.RouteTableListResult>): void;
  listAll(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RouteTableListResult>): void;
  listAll(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.RouteTableListResult>): Promise<Models.RouteTablesListAllResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listAllOperationSpec,
      callback) as Promise<Models.RouteTablesListAllResponse>;
  }

  /**
   * Deletes the specified route table.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} routeTableName The name of the route table.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  beginDeleteMethod(resourceGroupName: string, routeTableName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        routeTableName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Create or updates a route table in a specified resource group.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} routeTableName The name of the route table.
   *
   * @param {RouteTable} parameters Parameters supplied to the create or update route table
   * operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  beginCreateOrUpdate(resourceGroupName: string, routeTableName: string, parameters: Models.RouteTable, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        routeTableName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Updates a route table tags.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} routeTableName The name of the route table.
   *
   * @param {TagsObject} parameters Parameters supplied to update route table tags.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  beginUpdateTags(resourceGroupName: string, routeTableName: string, parameters: Models.TagsObject, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        routeTableName,
        parameters,
        options
      },
      beginUpdateTagsOperationSpec,
      options);
  }

  /**
   * Gets all route tables in a resource group.
   *
   * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  listNext(nextPageLink: string): Promise<Models.RouteTablesListNextResponse>;
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.RouteTablesListNextResponse>;
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.RouteTableListResult>): void;
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RouteTableListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.RouteTableListResult>): Promise<Models.RouteTablesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.RouteTablesListNextResponse>;
  }

  /**
   * Gets all route tables in a subscription.
   *
   * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  listAllNext(nextPageLink: string): Promise<Models.RouteTablesListAllNextResponse>;
  listAllNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.RouteTablesListAllNextResponse>;
  listAllNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.RouteTableListResult>): void;
  listAllNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RouteTableListResult>): void;
  listAllNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.RouteTableListResult>): Promise<Models.RouteTablesListAllNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listAllNextOperationSpec,
      callback) as Promise<Models.RouteTablesListAllNextResponse>;
  }

}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/routeTables/{routeTableName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.routeTableName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0,
    Parameters.expand
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RouteTable
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/routeTables",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RouteTableListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listAllOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Network/routeTables",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RouteTableListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/routeTables/{routeTableName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.routeTableName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/routeTables/{routeTableName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.routeTableName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.RouteTable,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.RouteTable
    },
    201: {
      bodyMapper: Mappers.RouteTable
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginUpdateTagsOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/routeTables/{routeTableName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.routeTableName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.TagsObject,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.RouteTable
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
      bodyMapper: Mappers.RouteTableListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listAllNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.RouteTableListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
