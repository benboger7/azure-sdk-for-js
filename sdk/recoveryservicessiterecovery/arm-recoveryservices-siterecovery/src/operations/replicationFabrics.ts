/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ReplicationFabrics } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SiteRecoveryManagementClient } from "../siteRecoveryManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  Fabric,
  ReplicationFabricsListNextOptionalParams,
  ReplicationFabricsListOptionalParams,
  ReplicationFabricsListResponse,
  ReplicationFabricsGetOptionalParams,
  ReplicationFabricsGetResponse,
  FabricCreationInput,
  ReplicationFabricsCreateOptionalParams,
  ReplicationFabricsCreateResponse,
  ReplicationFabricsPurgeOptionalParams,
  ReplicationFabricsCheckConsistencyOptionalParams,
  ReplicationFabricsCheckConsistencyResponse,
  ReplicationFabricsMigrateToAadOptionalParams,
  FailoverProcessServerRequest,
  ReplicationFabricsReassociateGatewayOptionalParams,
  ReplicationFabricsReassociateGatewayResponse,
  ReplicationFabricsDeleteOptionalParams,
  RenewCertificateInput,
  ReplicationFabricsRenewCertificateOptionalParams,
  ReplicationFabricsRenewCertificateResponse,
  ReplicationFabricsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ReplicationFabrics operations. */
export class ReplicationFabricsImpl implements ReplicationFabrics {
  private readonly client: SiteRecoveryManagementClient;

  /**
   * Initialize a new instance of the class ReplicationFabrics class.
   * @param client Reference to the service client
   */
  constructor(client: SiteRecoveryManagementClient) {
    this.client = client;
  }

  /**
   * Gets a list of the Azure Site Recovery fabrics in the vault.
   * @param options The options parameters.
   */
  public list(
    options?: ReplicationFabricsListOptionalParams
  ): PagedAsyncIterableIterator<Fabric> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(options);
      }
    };
  }

  private async *listPagingPage(
    options?: ReplicationFabricsListOptionalParams
  ): AsyncIterableIterator<Fabric[]> {
    let result = await this._list(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    options?: ReplicationFabricsListOptionalParams
  ): AsyncIterableIterator<Fabric> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets a list of the Azure Site Recovery fabrics in the vault.
   * @param options The options parameters.
   */
  private _list(
    options?: ReplicationFabricsListOptionalParams
  ): Promise<ReplicationFabricsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Gets the details of an Azure Site Recovery fabric.
   * @param fabricName Fabric name.
   * @param options The options parameters.
   */
  get(
    fabricName: string,
    options?: ReplicationFabricsGetOptionalParams
  ): Promise<ReplicationFabricsGetResponse> {
    return this.client.sendOperationRequest(
      { fabricName, options },
      getOperationSpec
    );
  }

  /**
   * The operation to create an Azure Site Recovery fabric (for e.g. Hyper-V site).
   * @param fabricName Name of the ASR fabric.
   * @param input Fabric creation input.
   * @param options The options parameters.
   */
  async beginCreate(
    fabricName: string,
    input: FabricCreationInput,
    options?: ReplicationFabricsCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ReplicationFabricsCreateResponse>,
      ReplicationFabricsCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ReplicationFabricsCreateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { fabricName, input, options },
      createOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * The operation to create an Azure Site Recovery fabric (for e.g. Hyper-V site).
   * @param fabricName Name of the ASR fabric.
   * @param input Fabric creation input.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    fabricName: string,
    input: FabricCreationInput,
    options?: ReplicationFabricsCreateOptionalParams
  ): Promise<ReplicationFabricsCreateResponse> {
    const poller = await this.beginCreate(fabricName, input, options);
    return poller.pollUntilDone();
  }

  /**
   * The operation to purge(force delete) an Azure Site Recovery fabric.
   * @param fabricName ASR fabric to purge.
   * @param options The options parameters.
   */
  async beginPurge(
    fabricName: string,
    options?: ReplicationFabricsPurgeOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { fabricName, options },
      purgeOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * The operation to purge(force delete) an Azure Site Recovery fabric.
   * @param fabricName ASR fabric to purge.
   * @param options The options parameters.
   */
  async beginPurgeAndWait(
    fabricName: string,
    options?: ReplicationFabricsPurgeOptionalParams
  ): Promise<void> {
    const poller = await this.beginPurge(fabricName, options);
    return poller.pollUntilDone();
  }

  /**
   * The operation to perform a consistency check on the fabric.
   * @param fabricName Fabric name.
   * @param options The options parameters.
   */
  async beginCheckConsistency(
    fabricName: string,
    options?: ReplicationFabricsCheckConsistencyOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ReplicationFabricsCheckConsistencyResponse>,
      ReplicationFabricsCheckConsistencyResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ReplicationFabricsCheckConsistencyResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { fabricName, options },
      checkConsistencyOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * The operation to perform a consistency check on the fabric.
   * @param fabricName Fabric name.
   * @param options The options parameters.
   */
  async beginCheckConsistencyAndWait(
    fabricName: string,
    options?: ReplicationFabricsCheckConsistencyOptionalParams
  ): Promise<ReplicationFabricsCheckConsistencyResponse> {
    const poller = await this.beginCheckConsistency(fabricName, options);
    return poller.pollUntilDone();
  }

  /**
   * The operation to migrate an Azure Site Recovery fabric to AAD.
   * @param fabricName ASR fabric to migrate.
   * @param options The options parameters.
   */
  async beginMigrateToAad(
    fabricName: string,
    options?: ReplicationFabricsMigrateToAadOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { fabricName, options },
      migrateToAadOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * The operation to migrate an Azure Site Recovery fabric to AAD.
   * @param fabricName ASR fabric to migrate.
   * @param options The options parameters.
   */
  async beginMigrateToAadAndWait(
    fabricName: string,
    options?: ReplicationFabricsMigrateToAadOptionalParams
  ): Promise<void> {
    const poller = await this.beginMigrateToAad(fabricName, options);
    return poller.pollUntilDone();
  }

  /**
   * The operation to move replications from a process server to another process server.
   * @param fabricName The name of the fabric containing the process server.
   * @param failoverProcessServerRequest The input to the failover process server operation.
   * @param options The options parameters.
   */
  async beginReassociateGateway(
    fabricName: string,
    failoverProcessServerRequest: FailoverProcessServerRequest,
    options?: ReplicationFabricsReassociateGatewayOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ReplicationFabricsReassociateGatewayResponse>,
      ReplicationFabricsReassociateGatewayResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ReplicationFabricsReassociateGatewayResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { fabricName, failoverProcessServerRequest, options },
      reassociateGatewayOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * The operation to move replications from a process server to another process server.
   * @param fabricName The name of the fabric containing the process server.
   * @param failoverProcessServerRequest The input to the failover process server operation.
   * @param options The options parameters.
   */
  async beginReassociateGatewayAndWait(
    fabricName: string,
    failoverProcessServerRequest: FailoverProcessServerRequest,
    options?: ReplicationFabricsReassociateGatewayOptionalParams
  ): Promise<ReplicationFabricsReassociateGatewayResponse> {
    const poller = await this.beginReassociateGateway(
      fabricName,
      failoverProcessServerRequest,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * The operation to delete or remove an Azure Site Recovery fabric.
   * @param fabricName ASR fabric to delete.
   * @param options The options parameters.
   */
  async beginDelete(
    fabricName: string,
    options?: ReplicationFabricsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { fabricName, options },
      deleteOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * The operation to delete or remove an Azure Site Recovery fabric.
   * @param fabricName ASR fabric to delete.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    fabricName: string,
    options?: ReplicationFabricsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(fabricName, options);
    return poller.pollUntilDone();
  }

  /**
   * Renews the connection certificate for the ASR replication fabric.
   * @param fabricName fabric name to renew certs for.
   * @param renewCertificate Renew certificate input.
   * @param options The options parameters.
   */
  async beginRenewCertificate(
    fabricName: string,
    renewCertificate: RenewCertificateInput,
    options?: ReplicationFabricsRenewCertificateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ReplicationFabricsRenewCertificateResponse>,
      ReplicationFabricsRenewCertificateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ReplicationFabricsRenewCertificateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { fabricName, renewCertificate, options },
      renewCertificateOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Renews the connection certificate for the ASR replication fabric.
   * @param fabricName fabric name to renew certs for.
   * @param renewCertificate Renew certificate input.
   * @param options The options parameters.
   */
  async beginRenewCertificateAndWait(
    fabricName: string,
    renewCertificate: RenewCertificateInput,
    options?: ReplicationFabricsRenewCertificateOptionalParams
  ): Promise<ReplicationFabricsRenewCertificateResponse> {
    const poller = await this.beginRenewCertificate(
      fabricName,
      renewCertificate,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: ReplicationFabricsListNextOptionalParams
  ): Promise<ReplicationFabricsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FabricCollection
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Fabric
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.fabricName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Fabric
    },
    201: {
      bodyMapper: Mappers.Fabric
    },
    202: {
      bodyMapper: Mappers.Fabric
    },
    204: {
      bodyMapper: Mappers.Fabric
    }
  },
  requestBody: Parameters.input,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.fabricName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const purgeOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.fabricName
  ],
  serializer
};
const checkConsistencyOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/checkConsistency",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.Fabric
    },
    201: {
      bodyMapper: Mappers.Fabric
    },
    202: {
      bodyMapper: Mappers.Fabric
    },
    204: {
      bodyMapper: Mappers.Fabric
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.fabricName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const migrateToAadOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/migratetoaad",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.fabricName
  ],
  serializer
};
const reassociateGatewayOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/reassociateGateway",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.Fabric
    },
    201: {
      bodyMapper: Mappers.Fabric
    },
    202: {
      bodyMapper: Mappers.Fabric
    },
    204: {
      bodyMapper: Mappers.Fabric
    }
  },
  requestBody: Parameters.failoverProcessServerRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.fabricName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/remove",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.fabricName
  ],
  serializer
};
const renewCertificateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/renewCertificate",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.Fabric
    },
    201: {
      bodyMapper: Mappers.Fabric
    },
    202: {
      bodyMapper: Mappers.Fabric
    },
    204: {
      bodyMapper: Mappers.Fabric
    }
  },
  requestBody: Parameters.renewCertificate,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.fabricName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FabricCollection
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
