using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class ContactFormController : Controller
    {
        // GET: ContactForm
        public ActionResult Index()
        {
            return View();
        }
        
        public JsonResult Create(ContactForm_tbl singleForm)
        {
            if (singleForm == null) return null;
            singleForm.id = Convert.ToInt32(Get8Digits());
            using(ContactFormEntities dbContext = new ContactFormEntities())
            {
                dbContext.ContactForm_tbl.Add(singleForm);
                dbContext.SaveChanges();
            }
            return GetAll();
        }

        public JsonResult GetAll()
        {
            using(ContactFormEntities dbContext = new ContactFormEntities())
            {
                var allItems = dbContext.ContactForm_tbl.ToList();
                return Json(allItems, JsonRequestBehavior.AllowGet);
            }
        }

        public string Get8Digits()
        {
            var bytes = new byte[4];
            var rng = System.Security.Cryptography.RandomNumberGenerator.Create();
            rng.GetBytes(bytes);
            uint random = BitConverter.ToUInt32(bytes, 0) % 100000000;
            return String.Format("{0:D8}", random);
        }
    }
}