/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  DatabaseMigrationsSqlVmGetOptionalParams,
  DatabaseMigrationsSqlVmGetResponse,
  DatabaseMigrationSqlVm,
  DatabaseMigrationsSqlVmCreateOrUpdateOptionalParams,
  DatabaseMigrationsSqlVmCreateOrUpdateResponse,
  MigrationOperationInput,
  DatabaseMigrationsSqlVmCancelOptionalParams,
  DatabaseMigrationsSqlVmCutoverOptionalParams
} from "../models";

/** Interface representing a DatabaseMigrationsSqlVm. */
export interface DatabaseMigrationsSqlVm {
  /**
   * Retrieve the Database Migration resource.
   * @param resourceGroupName Name of the resource group that contains the resource. You can obtain this
   *                          value from the Azure Resource Manager API or the portal.
   * @param sqlVirtualMachineName
   * @param targetDbName The name of the target database.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    sqlVirtualMachineName: string,
    targetDbName: string,
    options?: DatabaseMigrationsSqlVmGetOptionalParams
  ): Promise<DatabaseMigrationsSqlVmGetResponse>;
  /**
   * Create or Update Database Migration resource.
   * @param resourceGroupName Name of the resource group that contains the resource. You can obtain this
   *                          value from the Azure Resource Manager API or the portal.
   * @param sqlVirtualMachineName
   * @param targetDbName The name of the target database.
   * @param parameters Details of SqlMigrationService resource.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    sqlVirtualMachineName: string,
    targetDbName: string,
    parameters: DatabaseMigrationSqlVm,
    options?: DatabaseMigrationsSqlVmCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DatabaseMigrationsSqlVmCreateOrUpdateResponse>,
      DatabaseMigrationsSqlVmCreateOrUpdateResponse
    >
  >;
  /**
   * Create or Update Database Migration resource.
   * @param resourceGroupName Name of the resource group that contains the resource. You can obtain this
   *                          value from the Azure Resource Manager API or the portal.
   * @param sqlVirtualMachineName
   * @param targetDbName The name of the target database.
   * @param parameters Details of SqlMigrationService resource.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    sqlVirtualMachineName: string,
    targetDbName: string,
    parameters: DatabaseMigrationSqlVm,
    options?: DatabaseMigrationsSqlVmCreateOrUpdateOptionalParams
  ): Promise<DatabaseMigrationsSqlVmCreateOrUpdateResponse>;
  /**
   * Stop ongoing migration for the database.
   * @param resourceGroupName Name of the resource group that contains the resource. You can obtain this
   *                          value from the Azure Resource Manager API or the portal.
   * @param sqlVirtualMachineName
   * @param targetDbName The name of the target database.
   * @param parameters Migration Operation Input
   * @param options The options parameters.
   */
  beginCancel(
    resourceGroupName: string,
    sqlVirtualMachineName: string,
    targetDbName: string,
    parameters: MigrationOperationInput,
    options?: DatabaseMigrationsSqlVmCancelOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Stop ongoing migration for the database.
   * @param resourceGroupName Name of the resource group that contains the resource. You can obtain this
   *                          value from the Azure Resource Manager API or the portal.
   * @param sqlVirtualMachineName
   * @param targetDbName The name of the target database.
   * @param parameters Migration Operation Input
   * @param options The options parameters.
   */
  beginCancelAndWait(
    resourceGroupName: string,
    sqlVirtualMachineName: string,
    targetDbName: string,
    parameters: MigrationOperationInput,
    options?: DatabaseMigrationsSqlVmCancelOptionalParams
  ): Promise<void>;
  /**
   * Cutover online migration operation for the database.
   * @param resourceGroupName Name of the resource group that contains the resource. You can obtain this
   *                          value from the Azure Resource Manager API or the portal.
   * @param sqlVirtualMachineName
   * @param targetDbName The name of the target database.
   * @param parameters Migration Operation Input
   * @param options The options parameters.
   */
  beginCutover(
    resourceGroupName: string,
    sqlVirtualMachineName: string,
    targetDbName: string,
    parameters: MigrationOperationInput,
    options?: DatabaseMigrationsSqlVmCutoverOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Cutover online migration operation for the database.
   * @param resourceGroupName Name of the resource group that contains the resource. You can obtain this
   *                          value from the Azure Resource Manager API or the portal.
   * @param sqlVirtualMachineName
   * @param targetDbName The name of the target database.
   * @param parameters Migration Operation Input
   * @param options The options parameters.
   */
  beginCutoverAndWait(
    resourceGroupName: string,
    sqlVirtualMachineName: string,
    targetDbName: string,
    parameters: MigrationOperationInput,
    options?: DatabaseMigrationsSqlVmCutoverOptionalParams
  ): Promise<void>;
}