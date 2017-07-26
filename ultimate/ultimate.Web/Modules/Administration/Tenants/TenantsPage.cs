

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Administration/Tenants", typeof(ultimate.Administration.Pages.TenantsController))]

namespace ultimate.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Administration/Tenants"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TenantsRow))]
    public class TenantsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Administration/Tenants/TenantsIndex.cshtml");
        }
    }
}