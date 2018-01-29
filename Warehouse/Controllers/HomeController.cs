using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Warehouse.Models;

namespace Warehouse.Controllers
{
    public class HomeController : Controller
    {
        ProductModel db = new ProductModel();
        

            public ActionResult Index()
        {
           
            ViewBag.Products = db.Products;
            return View();
        }
       

        [HttpPost]
        public string AddElement(string id, string name, int price, bool available, DateTime date, string description)
        {
            if(id=="undefined" || id=="")
                {
                try
                {
                    Product insert = new Product { Name = name, Price = price, Available = available, Date = date, Description = description };
                    db.Products.Add(insert);
                    db.SaveChanges();


                    return db.Products.FirstOrDefault(c => c.Name == name).Id.ToString();
                }
                catch (Exception)
                {
                    return "ERROR";
                }
            }
            else
            {
                try
                {
                    int intID = Int32.Parse(id);
                    var result = db.Products.FirstOrDefault(c => c.Id == intID);
                   
                    if(result!=null)
                    {

                        result.Name = name;
                        result.Price = price;
                        result.Available = available;
                        result.Date = date;
                        result.Description = description;
                        db.SaveChanges();
                        return "UPDOK";
                    }
                    return "ERROR";
                }
                catch(Exception)
                {
                    return "ERROR";
                }
               
            }
           
           
           
        }
        [HttpPost]
        public string DelElement(string id)
        {
            if (id == null)
            {
                return "NOTFOUND";
            }
            Product del = new Product();

            foreach (Product c in db.Products)
            {
                if (c.Id == Int32.Parse(id))
                {
                    del = c;
                }
            }
            if (del.Name == null)
            {
                return "NOTFOUND";
            }
            else
            {
                db.Products.Remove(del);
                db.SaveChanges();
                return "OK";
            }
        }
        [HttpPost]
        public string GetElement(string id)
        {
            if (id == null)
            {
                return "NOTFOUND";
            }
            Product del = new Product();

            foreach (Product c in db.Products)
            {
                if (c.Id == Int32.Parse(id))
                {
                    del = c;
                }
            }
            if (del.Name == null)
            {
                return "NOTFOUND";
            }
            return del.Name + " " + del.Price + " " + del.Available + " " + del.Date + " " + del.Description;
        }
       
        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    
       
    }
}