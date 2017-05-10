var roi = {};
//roi.tabletLiftPerROMultiplier = 0.136;


roi.getSetValues = function () {
    //Current Providers
    var e = document.getElementById("dmsProvider");
    var selectedValue = e.options[e.selectedIndex].text;
    roi.dmsProvider = selectedValue;

    e = document.getElementById("nswsVendor");
    selectedValue = e.options[e.selectedIndex].text;

    roi.nswsVendor = selectedValue;
    roi.totalRedundantSoftwareMonthlyFeeSavings = document.getElementById("totalRedundantSoftwareMonthlyFeeSavings").value;

    //Store Information
    roi.rosPerMonth = document.getElementById("rosPerMonth").value;
    roi.cprosPerMonth = document.getElementById("cprosPerMonth").value;
    roi.avgDollarsPerCPRO = document.getElementById("avgDollarsPerCPRO").value;
    roi.storeMargin = document.getElementById("storeMargin").value;

    //Personnel
    roi.serviceAdvisorsDuringPeakHours = document.getElementById("serviceAdvisorsDuringPeakHours").value;

    //Equipment Status
    roi.currentNumberOfServiceAdvisor = document.getElementById("currentNumberOfServiceAdvisor").value;
    roi.mpiServiceBaysWithout = document.getElementById("mpiServiceBaysWithout").value;
}


roi.calculateROI = function () {
    roi.getSetValues();


    //Tablet Lift Per RO
    roi.tabletLiftPerRO = roi.avgDollarsPerCPRO * config.tabletLiftPerROMultiplier;

    document.getElementById("tabletLiftPerRO").value = roi.tabletLiftPerRO

    //Estimated Revenue Increase Per Month
    roi.estimatedRevenueIncreasePerMonth = roi.tabletLiftPerRO * roi.cprosPerMonth;
    document.getElementById("estimatedRevenueIncreasePerMonth").value = roi.estimatedRevenueIncreasePerMonth;

    //BreakEven RO Volume
    //roi.breakEvenROVolume = 

}

