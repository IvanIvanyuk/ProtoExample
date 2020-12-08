using System;
using Google.Protobuf;
using Proto.Ui;

namespace LibraryWhichDependsOnProtosFromOtherLibrary
{
    public class ClassThatUsesProtos
    {
        public static void Main()
        {
            var routeData = new RouteDataProto();
            Console.WriteLine(JsonFormatter.Default.Format(routeData));
            routeData.Id = ByteString.Empty;
            Console.WriteLine(JsonFormatter.Default.Format(routeData));
            routeData.IsInRoot = true;
            Console.WriteLine(JsonFormatter.Default.Format(routeData));
            routeData.Url = "/url";
            Console.WriteLine(JsonFormatter.Default.Format(routeData));
            Console.WriteLine(RouteDataProto.Parser.ParseFrom(routeData.ToByteArray()));
        }
    }
}