$(document).ready(function()
{
    $("#hamburger").click(function()
    {
        if($("#dashHead").css("left")!=0)
        {
            /* alert("1"); */
            $("#sideNavBar").toggle();
            $("#dashHead").css("left","0");
            $("#dashHead").css("transition","0.5s");
            $(".userInteraction").css("margin-left","-220px");
            $(".userInteraction").css("transition","0.5s");
        }
        else if($("#dashHead").css("left")==0)
        {
            /* alert("2"); */
            $("#sideNavBar").toggle();
            $("#dashHead").css("left","220px");
            $("#dashHead").css("transition","0.5s");
            $(".userInteraction").css("margin-left","220px");
            $(".userInteraction").css("transition","0.5s"); 
        }
    });
}); 