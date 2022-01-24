/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  NotificationContract,
  NotificationListByServiceOptionalParams,
  NotificationName,
  NotificationGetOptionalParams,
  NotificationGetResponse,
  NotificationCreateOrUpdateOptionalParams,
  NotificationCreateOrUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Notification. */
export interface Notification {
  /**
   * Lists a collection of properties defined within a service instance.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param options The options parameters.
   */
  listByService(
    resourceGroupName: string,
    serviceName: string,
    options?: NotificationListByServiceOptionalParams
  ): PagedAsyncIterableIterator<NotificationContract>;
  /**
   * Gets the details of the Notification specified by its identifier.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param notificationName Notification Name Identifier.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    notificationName: NotificationName,
    options?: NotificationGetOptionalParams
  ): Promise<NotificationGetResponse>;
  /**
   * Create or Update API Management publisher notification.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param notificationName Notification Name Identifier.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    notificationName: NotificationName,
    options?: NotificationCreateOrUpdateOptionalParams
  ): Promise<NotificationCreateOrUpdateResponse>;
}