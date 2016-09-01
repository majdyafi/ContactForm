using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class ContactFormModel
    {
       public string firstName{get;set;}
       public string lastName{get;set;}
       public string DoB{get;set;}
       public string gender{get;set;}
       public string trainingType{get;set;}
       public bool math{get;set;}
       public bool physics{get;set;}
       public bool chemistry { get; set; }
    }
}