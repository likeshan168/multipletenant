﻿namespace ultimate.Northwind {
    export interface TerritoryRow {
        ID?: number;
        TerritoryID?: string;
        TerritoryDescription?: string;
        RegionID?: number;
        RegionDescription?: string;
        TenantId?: number;
    }

    export namespace TerritoryRow {
        export const idProperty = 'ID';
        export const nameProperty = 'TerritoryID';
        export const localTextPrefix = 'Northwind.Territory';
        export const lookupKey = 'Northwind.Territory';

        export function getLookup(): Q.Lookup<TerritoryRow> {
            return Q.getLookup<TerritoryRow>('Northwind.Territory');
        }

        export namespace Fields {
            export declare const ID: string;
            export declare const TerritoryID: string;
            export declare const TerritoryDescription: string;
            export declare const RegionID: string;
            export declare const RegionDescription: string;
            export declare const TenantId: string;
        }

        ['ID', 'TerritoryID', 'TerritoryDescription', 'RegionID', 'RegionDescription', 'TenantId'].forEach(x => (<any>Fields)[x] = x);
    }
}

