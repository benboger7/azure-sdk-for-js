// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure/core-client";

export type ConsentStatus = "Active" | "Removed" | "Suspended";

/**
 * Parameters that could be used fo creating consent.
 */
export interface CreateConsentParams extends OperationOptions {
  /** Id of operator to which consent is given */
  operatorId: string;
  /** Contact of person that made the change */
  consentedBy: Contact;
  /** Status of the consent */
  status?: ConsentStatus;
  /** List of 2 character codes of available countries in ISO 3166-1 format */
  consentedCountries?: string[];
  /** Array of Contact */
  contacts?: Contact[];
  companyName?: string;
}

/**
 * Parameters that could be used fo updating consent.
 */
export interface UpdateConsentParams extends OperationOptions {
  /** Id of operator to which consent is given */
  operatorId: string;
  /** Contact of person that made the change */
  lastModifiedBy: Contact;
  /** Status of the consent */
  status?: ConsentStatus;
  /** List of 2 character codes of available countries in ISO 3166-1 format */
  consentedCountries?: string[];
  /** Array of Contact */
  contacts?: Contact[];
  companyName?: string;
}

/**
 * Parameters that could be used fo removing consent.
 */
export interface RemoveConsentParams extends OperationOptions {
  /** Id of operator to which consent is given */
  operatorId: string;
  /** Contact of person that made the change */
  lastModifiedBy: Contact;
}

export interface Contact {
  /** Full name of the contact */
  fullName: string;
  /** Email address of the contact */
  email: string;
  /** Phone number of the contact with a leading + and country code */
  phoneNumber?: string;
}

export interface Consent {
  /** Unique GUID that represents the operator record */
  operatorId: string;
  /** Status of the consent */
  status: ConsentStatus;
  /** Contact information of user that granted the consent to operator */
  consentedBy: Contact;
  /** Date/Time when the consent was provided */
  consentedOn: Date;
  /** Contact information of user that last modified the consent */
  lastModifiedBy: Contact;
  /** Date/Time when the consent was last updated */
  lastModifiedOn: Date;
  /** List of 2 character codes of available countries in ISO 3166-1 format */
  consentedCountries: string[];
  /** List of contact information */
  contacts: Contact[];
  /** User company name */
  companyName: string;
}

export interface OperatorOffering {
  /** The type of offer that operator is advertising */
  offerType: string;
  /** List of 2 character codes of available countries in ISO 3166-1 format */
  availableCountries: string[];
}

export interface Operator {
  /** Unique GUID that represents the operator record */
  operatorId: string;
  /** Public facing brand name of the operator */
  friendlyName: string;
  /** Count of phone numbers acquired from the operator */
  acquiredNumbersCount: number;
  offerings: OperatorOffering[];
  /** URL of the Operator's Operator Connect offerings */
  landingPage?: string;
  /** URL of the Operator's logo */
  logoUri?: string;
  /** URL of the Operator's thumbnail logo */
  logoThumbnailUri?: string;
}

export interface GetConsentParams extends OperationOptions {
  operatorId: string
}

export interface PagedOptionalParams extends OperationOptions {
  /** An optional parameter for how many entries to skip, for pagination purposes. The default value is 0. */
  skip?: number;
  /** An optional parameter for how many entries to return, for pagination purposes. The default will return the entire list. */
  top?: number;
}
