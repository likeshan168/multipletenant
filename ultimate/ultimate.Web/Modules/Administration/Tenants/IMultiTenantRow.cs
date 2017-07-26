using Serenity.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ultimate.Administration
{
    public interface IMultiTenantRow
    {
        Int32Field TenantIdField { get; }
    }
}
