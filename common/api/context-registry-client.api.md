## API Report File for "@bentley/context-registry-client"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { AuthorizedClientRequestContext } from '@bentley/itwin-client';
import { RequestOptions } from '@bentley/itwin-client';
import { RequestQueryOptions } from '@bentley/itwin-client';
import { WsgClient } from '@bentley/itwin-client';
import { WsgInstance } from '@bentley/itwin-client';

// @beta
export class Asset extends CommonContext {
    // (undocumented)
    assetType?: string;
}

// @beta
export class Context extends WsgInstance {
    // (undocumented)
    allowExternalTeamMembers?: boolean;
    // (undocumented)
    contextTypeId?: ContextType;
    // (undocumented)
    dataLocationId?: string;
    // (undocumented)
    name?: string;
    // (undocumented)
    number?: string;
    // (undocumented)
    status?: number;
    // (undocumented)
    ultimateRefId?: string;
}

// @beta
export class ContextRegistryClient extends WsgClient {
    constructor();
    // (undocumented)
    static readonly configRelyingPartyUri = "imjs_connected_context_service_relying_party_uri";
    getAsset(requestContext: AuthorizedClientRequestContext, queryOptions?: RequestQueryOptions): Promise<Asset>;
    getAssets(requestContext: AuthorizedClientRequestContext, queryOptions?: RequestQueryOptions): Promise<Asset[]>;
    getInvitedProjects(requestContext: AuthorizedClientRequestContext, queryOptions?: ContextRegistryRequestQueryOptions): Promise<Project[]>;
    getProject(requestContext: AuthorizedClientRequestContext, queryOptions?: ContextRegistryRequestQueryOptions): Promise<Project>;
    getProjects(requestContext: AuthorizedClientRequestContext, queryOptions?: ContextRegistryRequestQueryOptions): Promise<Project[]>;
    protected getRelyingPartyUrl(): string;
    protected getUrlSearchKey(): string;
    // (undocumented)
    static readonly searchKey: string;
    // (undocumented)
    protected setupOptionDefaults(options: RequestOptions): Promise<void>;
}

// @beta
export interface ContextRegistryRequestQueryOptions extends RequestQueryOptions {
    isFavorite?: boolean;
    isMRU?: boolean;
}

// @beta
export enum ContextType {
    // (undocumented)
    Asset = 2,
    // (undocumented)
    Project = 3,
    // (undocumented)
    Unknown = 0
}

// @beta
export class Project extends CommonContext {
    // (undocumented)
    assetId?: string;
    // (undocumented)
    isRbacEnabled?: boolean;
    // (undocumented)
    type?: string;
}


// (No @packageDocumentation comment for this package)

```
