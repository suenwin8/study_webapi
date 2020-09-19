using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Entities
{
    public class APIResponse<T>
    {
        public T data { get; set; }
        public string methodName { get; set; }
        public string apiVersion { get; set; }
        public ErrorEntity error { get; set; }
        public bool isSuccess { get; set; }
        public string message { get; set; }
        public static APIResponse<T> ReturnValidResponse(T data, string method, string apiVersion, ErrorEntity error, bool isSuccess, string message)
        {
            var Response = new APIResponse<T>
            {
                data = data
                ,methodName = method
                ,apiVersion = apiVersion
                ,error = error
                ,isSuccess = isSuccess
                ,message = message
        };            
            return Response;
        }
    }
    
    public class ErrorEntity
    {
        public string code { get; set; }
        public string message { get; set; }


}
}
