namespace ultimate.Administration {
    export interface TenantsRow {
        TenantId?: number;
        TenantName?: string;
    }

    export namespace TenantsRow {
        export const idProperty = 'TenantId';
        export const nameProperty = 'TenantName';
        export const localTextPrefix = 'Administration.Tenants';
        export const lookupKey = 'Administration.Tenants';

        export function getLookup(): Q.Lookup<TenantsRow> {
            return Q.getLookup<TenantsRow>('Administration.Tenants');
        }

        export namespace Fields {
            export declare const TenantId: string;
            export declare const TenantName: string;
        }

        ['TenantId', 'TenantName'].forEach(x => (<any>Fields)[x] = x);
    }
}

