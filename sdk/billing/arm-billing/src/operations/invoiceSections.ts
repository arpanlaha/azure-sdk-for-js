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
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/invoiceSectionsMappers";
import * as Parameters from "../models/parameters";
import { BillingManagementClientContext } from "../billingManagementClientContext";

/** Class representing a InvoiceSections. */
export class InvoiceSections {
  private readonly client: BillingManagementClientContext;

  /**
   * Create a InvoiceSections.
   * @param {BillingManagementClientContext} client Reference to the service client.
   */
  constructor(client: BillingManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists all invoice sections for which a user has access.
   * @param billingAccountName Billing Account Id.
   * @param [options] The optional parameters
   * @returns Promise<Models.InvoiceSectionsListByBillingAccountNameResponse>
   */
  listByBillingAccountName(billingAccountName: string, options?: Models.InvoiceSectionsListByBillingAccountNameOptionalParams): Promise<Models.InvoiceSectionsListByBillingAccountNameResponse>;
  /**
   * @param billingAccountName Billing Account Id.
   * @param callback The callback
   */
  listByBillingAccountName(billingAccountName: string, callback: msRest.ServiceCallback<Models.InvoiceSectionListResult>): void;
  /**
   * @param billingAccountName Billing Account Id.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByBillingAccountName(billingAccountName: string, options: Models.InvoiceSectionsListByBillingAccountNameOptionalParams, callback: msRest.ServiceCallback<Models.InvoiceSectionListResult>): void;
  listByBillingAccountName(billingAccountName: string, options?: Models.InvoiceSectionsListByBillingAccountNameOptionalParams | msRest.ServiceCallback<Models.InvoiceSectionListResult>, callback?: msRest.ServiceCallback<Models.InvoiceSectionListResult>): Promise<Models.InvoiceSectionsListByBillingAccountNameResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        options
      },
      listByBillingAccountNameOperationSpec,
      callback) as Promise<Models.InvoiceSectionsListByBillingAccountNameResponse>;
  }

  /**
   * The operation to create a InvoiceSection.
   * @param billingAccountName Billing Account Id.
   * @param parameters Parameters supplied to the Create InvoiceSection operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.InvoiceSectionsCreateResponse>
   */
  create(billingAccountName: string, parameters: Models.InvoiceSectionCreationRequest, options?: msRest.RequestOptionsBase): Promise<Models.InvoiceSectionsCreateResponse> {
    return this.beginCreate(billingAccountName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.InvoiceSectionsCreateResponse>;
  }

  /**
   * Lists all invoice sections under a billing profile for which a user has access.
   * @param billingAccountName Billing Account Id.
   * @param billingProfileName Billing Profile Id.
   * @param [options] The optional parameters
   * @returns Promise<Models.InvoiceSectionsListByBillingProfileNameResponse>
   */
  listByBillingProfileName(billingAccountName: string, billingProfileName: string, options?: msRest.RequestOptionsBase): Promise<Models.InvoiceSectionsListByBillingProfileNameResponse>;
  /**
   * @param billingAccountName Billing Account Id.
   * @param billingProfileName Billing Profile Id.
   * @param callback The callback
   */
  listByBillingProfileName(billingAccountName: string, billingProfileName: string, callback: msRest.ServiceCallback<Models.InvoiceSectionListResult>): void;
  /**
   * @param billingAccountName Billing Account Id.
   * @param billingProfileName Billing Profile Id.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByBillingProfileName(billingAccountName: string, billingProfileName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.InvoiceSectionListResult>): void;
  listByBillingProfileName(billingAccountName: string, billingProfileName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.InvoiceSectionListResult>, callback?: msRest.ServiceCallback<Models.InvoiceSectionListResult>): Promise<Models.InvoiceSectionsListByBillingProfileNameResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        billingProfileName,
        options
      },
      listByBillingProfileNameOperationSpec,
      callback) as Promise<Models.InvoiceSectionsListByBillingProfileNameResponse>;
  }

  /**
   * Lists all invoiceSections with create subscription permission for a user.
   * @param billingAccountName Billing Account Id.
   * @param [options] The optional parameters
   * @returns Promise<Models.InvoiceSectionsListByCreateSubscriptionPermissionResponse>
   */
  listByCreateSubscriptionPermission(billingAccountName: string, options?: Models.InvoiceSectionsListByCreateSubscriptionPermissionOptionalParams): Promise<Models.InvoiceSectionsListByCreateSubscriptionPermissionResponse>;
  /**
   * @param billingAccountName Billing Account Id.
   * @param callback The callback
   */
  listByCreateSubscriptionPermission(billingAccountName: string, callback: msRest.ServiceCallback<Models.InvoiceSectionListResult>): void;
  /**
   * @param billingAccountName Billing Account Id.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByCreateSubscriptionPermission(billingAccountName: string, options: Models.InvoiceSectionsListByCreateSubscriptionPermissionOptionalParams, callback: msRest.ServiceCallback<Models.InvoiceSectionListResult>): void;
  listByCreateSubscriptionPermission(billingAccountName: string, options?: Models.InvoiceSectionsListByCreateSubscriptionPermissionOptionalParams | msRest.ServiceCallback<Models.InvoiceSectionListResult>, callback?: msRest.ServiceCallback<Models.InvoiceSectionListResult>): Promise<Models.InvoiceSectionsListByCreateSubscriptionPermissionResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        options
      },
      listByCreateSubscriptionPermissionOperationSpec,
      callback) as Promise<Models.InvoiceSectionsListByCreateSubscriptionPermissionResponse>;
  }

  /**
   * Get the InvoiceSection by id.
   * @param billingAccountName Billing Account Id.
   * @param invoiceSectionName InvoiceSection Id.
   * @param [options] The optional parameters
   * @returns Promise<Models.InvoiceSectionsGetResponse>
   */
  get(billingAccountName: string, invoiceSectionName: string, options?: Models.InvoiceSectionsGetOptionalParams): Promise<Models.InvoiceSectionsGetResponse>;
  /**
   * @param billingAccountName Billing Account Id.
   * @param invoiceSectionName InvoiceSection Id.
   * @param callback The callback
   */
  get(billingAccountName: string, invoiceSectionName: string, callback: msRest.ServiceCallback<Models.InvoiceSection>): void;
  /**
   * @param billingAccountName Billing Account Id.
   * @param invoiceSectionName InvoiceSection Id.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(billingAccountName: string, invoiceSectionName: string, options: Models.InvoiceSectionsGetOptionalParams, callback: msRest.ServiceCallback<Models.InvoiceSection>): void;
  get(billingAccountName: string, invoiceSectionName: string, options?: Models.InvoiceSectionsGetOptionalParams | msRest.ServiceCallback<Models.InvoiceSection>, callback?: msRest.ServiceCallback<Models.InvoiceSection>): Promise<Models.InvoiceSectionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        invoiceSectionName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.InvoiceSectionsGetResponse>;
  }

  /**
   * The operation to update a InvoiceSection.
   * @param billingAccountName Billing Account Id.
   * @param invoiceSectionName InvoiceSection Id.
   * @param parameters Parameters supplied to the Create InvoiceSection operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.InvoiceSectionsUpdateResponse>
   */
  update(billingAccountName: string, invoiceSectionName: string, parameters: Models.InvoiceSection, options?: msRest.RequestOptionsBase): Promise<Models.InvoiceSectionsUpdateResponse> {
    return this.beginUpdate(billingAccountName,invoiceSectionName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.InvoiceSectionsUpdateResponse>;
  }

  /**
   * Elevates the caller's access to match their billing profile access.
   * @param billingAccountName Billing Account Id.
   * @param invoiceSectionName InvoiceSection Id.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  elevateToBillingProfile(billingAccountName: string, invoiceSectionName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param billingAccountName Billing Account Id.
   * @param invoiceSectionName InvoiceSection Id.
   * @param callback The callback
   */
  elevateToBillingProfile(billingAccountName: string, invoiceSectionName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param billingAccountName Billing Account Id.
   * @param invoiceSectionName InvoiceSection Id.
   * @param options The optional parameters
   * @param callback The callback
   */
  elevateToBillingProfile(billingAccountName: string, invoiceSectionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  elevateToBillingProfile(billingAccountName: string, invoiceSectionName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        invoiceSectionName,
        options
      },
      elevateToBillingProfileOperationSpec,
      callback);
  }

  /**
   * The operation to create a InvoiceSection.
   * @param billingAccountName Billing Account Id.
   * @param parameters Parameters supplied to the Create InvoiceSection operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreate(billingAccountName: string, parameters: Models.InvoiceSectionCreationRequest, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        billingAccountName,
        parameters,
        options
      },
      beginCreateOperationSpec,
      options);
  }

  /**
   * The operation to update a InvoiceSection.
   * @param billingAccountName Billing Account Id.
   * @param invoiceSectionName InvoiceSection Id.
   * @param parameters Parameters supplied to the Create InvoiceSection operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(billingAccountName: string, invoiceSectionName: string, parameters: Models.InvoiceSection, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        billingAccountName,
        invoiceSectionName,
        parameters,
        options
      },
      beginUpdateOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByBillingAccountNameOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/invoiceSections",
  urlParameters: [
    Parameters.billingAccountName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.expand
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.InvoiceSectionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByBillingProfileNameOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections",
  urlParameters: [
    Parameters.billingAccountName,
    Parameters.billingProfileName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.InvoiceSectionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByCreateSubscriptionPermissionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/listInvoiceSectionsWithCreateSubscriptionPermission",
  urlParameters: [
    Parameters.billingAccountName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.expand
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.InvoiceSectionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/invoiceSections/{invoiceSectionName}",
  urlParameters: [
    Parameters.billingAccountName,
    Parameters.invoiceSectionName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.expand
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.InvoiceSection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const elevateToBillingProfileOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/invoiceSections/{invoiceSectionName}/elevate",
  urlParameters: [
    Parameters.billingAccountName,
    Parameters.invoiceSectionName
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginCreateOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/invoiceSections",
  urlParameters: [
    Parameters.billingAccountName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.InvoiceSectionCreationRequest,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.InvoiceSection,
      headersMapper: Mappers.InvoiceSectionsCreateHeaders
    },
    202: {
      headersMapper: Mappers.InvoiceSectionsCreateHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/invoiceSections/{invoiceSectionName}",
  urlParameters: [
    Parameters.billingAccountName,
    Parameters.invoiceSectionName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.InvoiceSection,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.InvoiceSection,
      headersMapper: Mappers.InvoiceSectionsUpdateHeaders
    },
    202: {
      headersMapper: Mappers.InvoiceSectionsUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
