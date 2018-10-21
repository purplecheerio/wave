exports.RouteGetSomething = function(req,res)
{
    var result = {"value":"helloworld"};
    res.status(200).json(result);
}
exports.RoutePostSomething = function(req,res)
{
    res.status(200).json({"params=":req.params,"body":req.body});
}
