/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { BaseResource, CloudError, AzureServiceClientOptions } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export { BaseResource, CloudError };

/**
 * The object that represents the operation.
 */
export interface OperationDisplay {
  /**
   * Service provider: Microsoft.NotificationHubs
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly provider?: string;
  /**
   * Resource on which the operation is performed: Invoice, etc.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly resource?: string;
  /**
   * Operation type: Read, write, delete, etc.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly operation?: string;
}

/**
 * A NotificationHubs REST API operation
 */
export interface Operation {
  /**
   * Operation name: {provider}/{resource}/{operation}
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * The object that represents the operation.
   */
  display?: OperationDisplay;
}

/**
 * Error response indicates NotificationHubs service is not able to process the incoming request.
 * The reason is provided in the error message.
 */
export interface ErrorResponse {
  /**
   * Error code.
   */
  code?: string;
  /**
   * Error message indicating why the operation failed.
   */
  message?: string;
}

/**
 * The Sku description for a namespace
 */
export interface Sku {
  /**
   * Name of the notification hub sku. Possible values include: 'Free', 'Basic', 'Standard'
   */
  name: SkuName;
  /**
   * The tier of particular sku
   */
  tier?: string;
  /**
   * The Sku size
   */
  size?: string;
  /**
   * The Sku Family
   */
  family?: string;
  /**
   * The capacity of the resource
   */
  capacity?: number;
}

/**
 * Parameters supplied to the Check Name Availability for Namespace and NotificationHubs.
 */
export interface CheckAvailabilityParameters {
  /**
   * Resource Id
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * Resource name
   */
  name: string;
  /**
   * Resource type
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly type?: string;
  /**
   * Resource location
   */
  location?: string;
  /**
   * Resource tags
   */
  tags?: { [propertyName: string]: string };
  /**
   * The sku of the created namespace
   */
  sku?: Sku;
  /**
   * True if the name is available and can be used to create new Namespace/NotificationHub.
   * Otherwise false.
   */
  isAvailiable?: boolean;
}

/**
 * An interface representing Resource.
 */
export interface Resource extends BaseResource {
  /**
   * Resource Id
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * Resource name
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * Resource type
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly type?: string;
  /**
   * Resource location
   */
  location?: string;
  /**
   * Resource tags
   */
  tags?: { [propertyName: string]: string };
  /**
   * The sku of the created namespace
   */
  sku?: Sku;
}

/**
 * Description of a CheckAvailability resource.
 */
export interface CheckAvailabilityResult extends Resource {
  /**
   * True if the name is available and can be used to create new Namespace/NotificationHub.
   * Otherwise false.
   */
  isAvailiable?: boolean;
}

/**
 * Parameters supplied to the CreateOrUpdate Namespace operation.
 */
export interface NamespaceCreateOrUpdateParameters extends Resource {
  /**
   * The name of the namespace.
   */
  namespaceCreateOrUpdateParametersName?: string;
  /**
   * Provisioning state of the Namespace.
   */
  provisioningState?: string;
  /**
   * Specifies the targeted region in which the namespace should be created. It can be any of the
   * following values: Australia EastAustralia SoutheastCentral USEast USEast US 2West USNorth
   * Central USSouth Central USEast AsiaSoutheast AsiaBrazil SouthJapan EastJapan WestNorth
   * EuropeWest Europe
   */
  region?: string;
  /**
   * Identifier for Azure Insights metrics
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly metricId?: string;
  /**
   * Status of the namespace. It can be any of these values:1 = Created/Active2 = Creating3 =
   * Suspended4 = Deleting
   */
  status?: string;
  /**
   * The time the namespace was created.
   */
  createdAt?: Date;
  /**
   * The time the namespace was updated.
   */
  updatedAt?: Date;
  /**
   * Endpoint you can use to perform NotificationHub operations.
   */
  serviceBusEndpoint?: string;
  /**
   * The Id of the Azure subscription associated with the namespace.
   */
  subscriptionId?: string;
  /**
   * ScaleUnit where the namespace gets created
   */
  scaleUnit?: string;
  /**
   * Whether or not the namespace is currently enabled.
   */
  enabled?: boolean;
  /**
   * Whether or not the namespace is set as Critical.
   */
  critical?: boolean;
  /**
   * Data center for the namespace
   */
  dataCenter?: string;
  /**
   * The namespace type. Possible values include: 'Messaging', 'NotificationHub'
   */
  namespaceType?: NamespaceType;
}

/**
 * Parameters supplied to the Patch Namespace operation.
 */
export interface NamespacePatchParameters {
  /**
   * Resource tags
   */
  tags?: { [propertyName: string]: string };
  /**
   * The sku of the created namespace
   */
  sku?: Sku;
}

/**
 * Description of a Namespace resource.
 */
export interface NamespaceResource extends Resource {
  /**
   * The name of the namespace.
   */
  namespaceResourceName?: string;
  /**
   * Provisioning state of the Namespace.
   */
  provisioningState?: string;
  /**
   * Specifies the targeted region in which the namespace should be created. It can be any of the
   * following values: Australia EastAustralia SoutheastCentral USEast USEast US 2West USNorth
   * Central USSouth Central USEast AsiaSoutheast AsiaBrazil SouthJapan EastJapan WestNorth
   * EuropeWest Europe
   */
  region?: string;
  /**
   * Identifier for Azure Insights metrics
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly metricId?: string;
  /**
   * Status of the namespace. It can be any of these values:1 = Created/Active2 = Creating3 =
   * Suspended4 = Deleting
   */
  status?: string;
  /**
   * The time the namespace was created.
   */
  createdAt?: Date;
  /**
   * The time the namespace was updated.
   */
  updatedAt?: Date;
  /**
   * Endpoint you can use to perform NotificationHub operations.
   */
  serviceBusEndpoint?: string;
  /**
   * The Id of the Azure subscription associated with the namespace.
   */
  subscriptionId?: string;
  /**
   * ScaleUnit where the namespace gets created
   */
  scaleUnit?: string;
  /**
   * Whether or not the namespace is currently enabled.
   */
  enabled?: boolean;
  /**
   * Whether or not the namespace is set as Critical.
   */
  critical?: boolean;
  /**
   * Data center for the namespace
   */
  dataCenter?: string;
  /**
   * The namespace type. Possible values include: 'Messaging', 'NotificationHub'
   */
  namespaceType?: NamespaceType;
}

/**
 * SharedAccessAuthorizationRule properties.
 */
export interface SharedAccessAuthorizationRuleProperties {
  /**
   * The rights associated with the rule.
   */
  rights?: AccessRights[];
  /**
   * A base64-encoded 256-bit primary key for signing and validating the SAS token.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly primaryKey?: string;
  /**
   * A base64-encoded 256-bit primary key for signing and validating the SAS token.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly secondaryKey?: string;
  /**
   * A string that describes the authorization rule.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly keyName?: string;
  /**
   * A string that describes the claim type
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly claimType?: string;
  /**
   * A string that describes the claim value
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly claimValue?: string;
  /**
   * The last modified time for this rule
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly modifiedTime?: string;
  /**
   * The created time for this rule
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly createdTime?: string;
  /**
   * The revision number for the rule
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly revision?: number;
}

/**
 * Parameters supplied to the CreateOrUpdate Namespace AuthorizationRules.
 */
export interface SharedAccessAuthorizationRuleCreateOrUpdateParameters {
  /**
   * Properties of the Namespace AuthorizationRules.
   */
  properties: SharedAccessAuthorizationRuleProperties;
}

/**
 * Description of a Namespace AuthorizationRules.
 */
export interface SharedAccessAuthorizationRuleResource extends Resource {
  /**
   * The rights associated with the rule.
   */
  rights?: AccessRights[];
  /**
   * A base64-encoded 256-bit primary key for signing and validating the SAS token.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly primaryKey?: string;
  /**
   * A base64-encoded 256-bit primary key for signing and validating the SAS token.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly secondaryKey?: string;
  /**
   * A string that describes the authorization rule.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly keyName?: string;
  /**
   * A string that describes the claim type
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly claimType?: string;
  /**
   * A string that describes the claim value
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly claimValue?: string;
  /**
   * The last modified time for this rule
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly modifiedTime?: string;
  /**
   * The created time for this rule
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly createdTime?: string;
  /**
   * The revision number for the rule
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly revision?: number;
}

/**
 * Namespace/NotificationHub Connection String
 */
export interface ResourceListKeys {
  /**
   * PrimaryConnectionString of the AuthorizationRule.
   */
  primaryConnectionString?: string;
  /**
   * SecondaryConnectionString of the created AuthorizationRule
   */
  secondaryConnectionString?: string;
  /**
   * PrimaryKey of the created AuthorizationRule.
   */
  primaryKey?: string;
  /**
   * SecondaryKey of the created AuthorizationRule
   */
  secondaryKey?: string;
  /**
   * KeyName of the created AuthorizationRule
   */
  keyName?: string;
}

/**
 * Namespace/NotificationHub Regenerate Keys
 */
export interface PolicykeyResource {
  /**
   * Name of the key that has to be regenerated for the Namespace/Notification Hub Authorization
   * Rule. The value can be Primary Key/Secondary Key.
   */
  policyKey?: string;
}

/**
 * Description of a NotificationHub ApnsCredential.
 */
export interface ApnsCredential {
  /**
   * The APNS certificate.
   */
  apnsCertificate?: string;
  /**
   * The certificate key.
   */
  certificateKey?: string;
  /**
   * The endpoint of this credential.
   */
  endpoint?: string;
  /**
   * The APNS certificate Thumbprint
   */
  thumbprint?: string;
  /**
   * A 10-character key identifier (kid) key, obtained from your developer account
   */
  keyId?: string;
  /**
   * The name of the application
   */
  appName?: string;
  /**
   * The issuer (iss) registered claim key, whose value is your 10-character Team ID, obtained from
   * your developer account
   */
  appId?: string;
  /**
   * Provider Authentication Token, obtained through your developer account
   */
  token?: string;
}

/**
 * Description of a NotificationHub WnsCredential.
 */
export interface WnsCredential {
  /**
   * The package ID for this credential.
   */
  packageSid?: string;
  /**
   * The secret key.
   */
  secretKey?: string;
  /**
   * The Windows Live endpoint.
   */
  windowsLiveEndpoint?: string;
}

/**
 * Description of a NotificationHub GcmCredential.
 */
export interface GcmCredential {
  /**
   * The GCM endpoint.
   */
  gcmEndpoint?: string;
  /**
   * The Google API key.
   */
  googleApiKey?: string;
}

/**
 * Description of a NotificationHub MpnsCredential.
 */
export interface MpnsCredential {
  /**
   * The MPNS certificate.
   */
  mpnsCertificate?: string;
  /**
   * The certificate key for this credential.
   */
  certificateKey?: string;
  /**
   * The MPNS certificate Thumbprint
   */
  thumbprint?: string;
}

/**
 * Description of a NotificationHub AdmCredential.
 */
export interface AdmCredential {
  /**
   * The client identifier.
   */
  clientId?: string;
  /**
   * The credential secret access key.
   */
  clientSecret?: string;
  /**
   * The URL of the authorization token.
   */
  authTokenUrl?: string;
}

/**
 * Description of a NotificationHub BaiduCredential.
 */
export interface BaiduCredential {
  /**
   * Baidu Api Key.
   */
  baiduApiKey?: string;
  /**
   * Baidu Endpoint.
   */
  baiduEndPoint?: string;
  /**
   * Baidu Secret Key
   */
  baiduSecretKey?: string;
}

/**
 * Parameters supplied to the CreateOrUpdate NotificationHub operation.
 */
export interface NotificationHubCreateOrUpdateParameters extends Resource {
  /**
   * The NotificationHub name.
   */
  notificationHubCreateOrUpdateParametersName?: string;
  /**
   * The RegistrationTtl of the created NotificationHub
   */
  registrationTtl?: string;
  /**
   * The AuthorizationRules of the created NotificationHub
   */
  authorizationRules?: SharedAccessAuthorizationRuleProperties[];
  /**
   * The ApnsCredential of the created NotificationHub
   */
  apnsCredential?: ApnsCredential;
  /**
   * The WnsCredential of the created NotificationHub
   */
  wnsCredential?: WnsCredential;
  /**
   * The GcmCredential of the created NotificationHub
   */
  gcmCredential?: GcmCredential;
  /**
   * The MpnsCredential of the created NotificationHub
   */
  mpnsCredential?: MpnsCredential;
  /**
   * The AdmCredential of the created NotificationHub
   */
  admCredential?: AdmCredential;
  /**
   * The BaiduCredential of the created NotificationHub
   */
  baiduCredential?: BaiduCredential;
}

/**
 * Parameters supplied to the patch NotificationHub operation.
 */
export interface NotificationHubPatchParameters extends Resource {
  /**
   * The NotificationHub name.
   */
  notificationHubPatchParametersName?: string;
  /**
   * The RegistrationTtl of the created NotificationHub
   */
  registrationTtl?: string;
  /**
   * The AuthorizationRules of the created NotificationHub
   */
  authorizationRules?: SharedAccessAuthorizationRuleProperties[];
  /**
   * The ApnsCredential of the created NotificationHub
   */
  apnsCredential?: ApnsCredential;
  /**
   * The WnsCredential of the created NotificationHub
   */
  wnsCredential?: WnsCredential;
  /**
   * The GcmCredential of the created NotificationHub
   */
  gcmCredential?: GcmCredential;
  /**
   * The MpnsCredential of the created NotificationHub
   */
  mpnsCredential?: MpnsCredential;
  /**
   * The AdmCredential of the created NotificationHub
   */
  admCredential?: AdmCredential;
  /**
   * The BaiduCredential of the created NotificationHub
   */
  baiduCredential?: BaiduCredential;
}

/**
 * Description of a NotificationHub Resource.
 */
export interface NotificationHubResource extends Resource {
  /**
   * The NotificationHub name.
   */
  notificationHubResourceName?: string;
  /**
   * The RegistrationTtl of the created NotificationHub
   */
  registrationTtl?: string;
  /**
   * The AuthorizationRules of the created NotificationHub
   */
  authorizationRules?: SharedAccessAuthorizationRuleProperties[];
  /**
   * The ApnsCredential of the created NotificationHub
   */
  apnsCredential?: ApnsCredential;
  /**
   * The WnsCredential of the created NotificationHub
   */
  wnsCredential?: WnsCredential;
  /**
   * The GcmCredential of the created NotificationHub
   */
  gcmCredential?: GcmCredential;
  /**
   * The MpnsCredential of the created NotificationHub
   */
  mpnsCredential?: MpnsCredential;
  /**
   * The AdmCredential of the created NotificationHub
   */
  admCredential?: AdmCredential;
  /**
   * The BaiduCredential of the created NotificationHub
   */
  baiduCredential?: BaiduCredential;
}

/**
 * Description of a NotificationHub Resource.
 */
export interface DebugSendResponse extends Resource {
  /**
   * successful send
   */
  success?: number;
  /**
   * send failure
   */
  failure?: number;
  /**
   * actual failure description
   */
  results?: any;
}

/**
 * Description of a NotificationHub PNS Credentials.
 */
export interface PnsCredentialsResource extends Resource {
  /**
   * The ApnsCredential of the created NotificationHub
   */
  apnsCredential?: ApnsCredential;
  /**
   * The WnsCredential of the created NotificationHub
   */
  wnsCredential?: WnsCredential;
  /**
   * The GcmCredential of the created NotificationHub
   */
  gcmCredential?: GcmCredential;
  /**
   * The MpnsCredential of the created NotificationHub
   */
  mpnsCredential?: MpnsCredential;
  /**
   * The AdmCredential of the created NotificationHub
   */
  admCredential?: AdmCredential;
  /**
   * The BaiduCredential of the created NotificationHub
   */
  baiduCredential?: BaiduCredential;
}

/**
 * An interface representing SubResource.
 */
export interface SubResource extends BaseResource {
  /**
   * Resource Id
   */
  id?: string;
}

/**
 * Optional Parameters.
 */
export interface NotificationHubsPatchOptionalParams extends msRest.RequestOptionsBase {
  /**
   * Parameters supplied to patch a NotificationHub Resource.
   */
  parameters?: NotificationHubPatchParameters;
}

/**
 * Optional Parameters.
 */
export interface NotificationHubsDebugSendOptionalParams extends msRest.RequestOptionsBase {
  /**
   * Debug send parameters
   */
  parameters?: any;
}

/**
 * An interface representing NotificationHubsManagementClientOptions.
 */
export interface NotificationHubsManagementClientOptions extends AzureServiceClientOptions {
  baseUri?: string;
}

/**
 * @interface
 * Result of the request to list NotificationHubs operations. It contains a list of operations and
 * a URL link to get the next set of results.
 * @extends Array<Operation>
 */
export interface OperationListResult extends Array<Operation> {
  /**
   * URL to get the next set of operation list results if there are any.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly nextLink?: string;
}

/**
 * @interface
 * The response of the List Namespace operation.
 * @extends Array<NamespaceResource>
 */
export interface NamespaceListResult extends Array<NamespaceResource> {
  /**
   * Link to the next set of results. Not empty if Value contains incomplete list of Namespaces
   */
  nextLink?: string;
}

/**
 * @interface
 * The response of the List Namespace operation.
 * @extends Array<SharedAccessAuthorizationRuleResource>
 */
export interface SharedAccessAuthorizationRuleListResult extends Array<SharedAccessAuthorizationRuleResource> {
  /**
   * Link to the next set of results. Not empty if Value contains incomplete list of
   * AuthorizationRules
   */
  nextLink?: string;
}

/**
 * @interface
 * The response of the List NotificationHub operation.
 * @extends Array<NotificationHubResource>
 */
export interface NotificationHubListResult extends Array<NotificationHubResource> {
  /**
   * Link to the next set of results. Not empty if Value contains incomplete list of
   * NotificationHub
   */
  nextLink?: string;
}

/**
 * Defines values for SkuName.
 * Possible values include: 'Free', 'Basic', 'Standard'
 * @readonly
 * @enum {string}
 */
export type SkuName = 'Free' | 'Basic' | 'Standard';

/**
 * Defines values for NamespaceType.
 * Possible values include: 'Messaging', 'NotificationHub'
 * @readonly
 * @enum {string}
 */
export type NamespaceType = 'Messaging' | 'NotificationHub';

/**
 * Defines values for AccessRights.
 * Possible values include: 'Manage', 'Send', 'Listen'
 * @readonly
 * @enum {string}
 */
export type AccessRights = 'Manage' | 'Send' | 'Listen';

/**
 * Contains response data for the list operation.
 */
export type OperationsListResponse = OperationListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OperationListResult;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type OperationsListNextResponse = OperationListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OperationListResult;
    };
};

/**
 * Contains response data for the checkAvailability operation.
 */
export type NamespacesCheckAvailabilityResponse = CheckAvailabilityResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: CheckAvailabilityResult;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type NamespacesCreateOrUpdateResponse = NamespaceResource & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: NamespaceResource;
    };
};

/**
 * Contains response data for the patch operation.
 */
export type NamespacesPatchResponse = NamespaceResource & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: NamespaceResource;
    };
};

/**
 * Contains response data for the get operation.
 */
export type NamespacesGetResponse = NamespaceResource & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: NamespaceResource;
    };
};

/**
 * Contains response data for the createOrUpdateAuthorizationRule operation.
 */
export type NamespacesCreateOrUpdateAuthorizationRuleResponse = SharedAccessAuthorizationRuleResource & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SharedAccessAuthorizationRuleResource;
    };
};

/**
 * Contains response data for the getAuthorizationRule operation.
 */
export type NamespacesGetAuthorizationRuleResponse = SharedAccessAuthorizationRuleResource & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SharedAccessAuthorizationRuleResource;
    };
};

/**
 * Contains response data for the list operation.
 */
export type NamespacesListResponse = NamespaceListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: NamespaceListResult;
    };
};

/**
 * Contains response data for the listAll operation.
 */
export type NamespacesListAllResponse = NamespaceListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: NamespaceListResult;
    };
};

/**
 * Contains response data for the listAuthorizationRules operation.
 */
export type NamespacesListAuthorizationRulesResponse = SharedAccessAuthorizationRuleListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SharedAccessAuthorizationRuleListResult;
    };
};

/**
 * Contains response data for the listKeys operation.
 */
export type NamespacesListKeysResponse = SharedAccessAuthorizationRuleListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SharedAccessAuthorizationRuleListResult;
    };
};

/**
 * Contains response data for the regenerateKeys operation.
 */
export type NamespacesRegenerateKeysResponse = ResourceListKeys & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ResourceListKeys;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type NamespacesListNextResponse = NamespaceListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: NamespaceListResult;
    };
};

/**
 * Contains response data for the listAllNext operation.
 */
export type NamespacesListAllNextResponse = NamespaceListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: NamespaceListResult;
    };
};

/**
 * Contains response data for the listAuthorizationRulesNext operation.
 */
export type NamespacesListAuthorizationRulesNextResponse = SharedAccessAuthorizationRuleListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SharedAccessAuthorizationRuleListResult;
    };
};

/**
 * Contains response data for the checkNotificationHubAvailability operation.
 */
export type NotificationHubsCheckNotificationHubAvailabilityResponse = CheckAvailabilityResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: CheckAvailabilityResult;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type NotificationHubsCreateOrUpdateResponse = NotificationHubResource & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: NotificationHubResource;
    };
};

/**
 * Contains response data for the patch operation.
 */
export type NotificationHubsPatchResponse = NotificationHubResource & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: NotificationHubResource;
    };
};

/**
 * Contains response data for the get operation.
 */
export type NotificationHubsGetResponse = NotificationHubResource & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: NotificationHubResource;
    };
};

/**
 * Contains response data for the debugSend operation.
 */
export type NotificationHubsDebugSendResponse = DebugSendResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: DebugSendResponse;
    };
};

/**
 * Contains response data for the createOrUpdateAuthorizationRule operation.
 */
export type NotificationHubsCreateOrUpdateAuthorizationRuleResponse = SharedAccessAuthorizationRuleResource & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SharedAccessAuthorizationRuleResource;
    };
};

/**
 * Contains response data for the getAuthorizationRule operation.
 */
export type NotificationHubsGetAuthorizationRuleResponse = SharedAccessAuthorizationRuleResource & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SharedAccessAuthorizationRuleResource;
    };
};

/**
 * Contains response data for the list operation.
 */
export type NotificationHubsListResponse = NotificationHubListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: NotificationHubListResult;
    };
};

/**
 * Contains response data for the listAuthorizationRules operation.
 */
export type NotificationHubsListAuthorizationRulesResponse = SharedAccessAuthorizationRuleListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SharedAccessAuthorizationRuleListResult;
    };
};

/**
 * Contains response data for the listKeys operation.
 */
export type NotificationHubsListKeysResponse = ResourceListKeys & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ResourceListKeys;
    };
};

/**
 * Contains response data for the regenerateKeys operation.
 */
export type NotificationHubsRegenerateKeysResponse = ResourceListKeys & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ResourceListKeys;
    };
};

/**
 * Contains response data for the getPnsCredentials operation.
 */
export type NotificationHubsGetPnsCredentialsResponse = PnsCredentialsResource & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: PnsCredentialsResource;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type NotificationHubsListNextResponse = NotificationHubListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: NotificationHubListResult;
    };
};

/**
 * Contains response data for the listAuthorizationRulesNext operation.
 */
export type NotificationHubsListAuthorizationRulesNextResponse = SharedAccessAuthorizationRuleListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SharedAccessAuthorizationRuleListResult;
    };
};
