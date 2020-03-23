import React from 'react';

export default function Rose(props) {
    const scaleStyle = {transform: "scale(.12)", transformOrigin: "30px 50px"}
    return (
        <svg xmlns="http://www.w3.org/2000/svg" id={props.id}>
             <title>Uncoloured Rose</title>
            <g style={scaleStyle}>
            <g id="layer2" display="inline" >
                <path fill="#000000" id="path3051" d="m91.880127,1386.918457c-2.14209,-17.69873 -10.041016,-38.781616 -5.840576,-53.096313c12.815186,-43.671509 55.756592,-59.578613 88.670898,-138.050415c-40.434326,-59.717896 -66.708008,-97.11145 -101.185059,-130.575562c-31.205811,-30.289063 -69.29834,-57.833008 -72.94873,-90.43396c-4.193604,-37.450806 12.769775,-21.204834 108.294189,-152.788452c-30.414551,-25.104858 -58.038086,-83.479248 -54.447021,-128.333008c7.14624,-89.258789 70.994873,-208.882935 96.109619,-290.15564c17.324951,-56.064575 -5.034912,-74.200195 9.310059,-131.588989c45.69751,1.997192 110.470703,14.741455 159.05542,2.74707c86.844971,-21.440063 151.635254,-75.77124 174.389404,-83.453491c43.012451,-14.522217 71.618408,-0.231445 104.068604,6.37146c188.9729,-49.73291 244.246094,-200.479248 356.807129,-197.518188c86.837891,2.284424 102.653076,135.787476 165.660645,142.298096c78.697998,-54.827637 149.451904,9.503662 223.004395,31.857788c9.800537,-38.358643 24.58252,-70.90564 67.963135,-70.087158c0,0 45.299805,-51.040039 76.458984,-55.220093c11.98999,-1.608521 33.981445,12.743042 33.981445,12.743042c0,0 35.571533,-29.834229 57.343994,-31.857788c11.145752,-1.035889 27.610107,4.247681 27.610107,4.247681c17.234863,-18.748535 48.013794,-17.181152 76.45874,-19.114624c42.480835,-3.640259 77.142578,-8.397705 99.821045,-14.866943c-3.190063,23.537231 -10.739136,44.894897 2.123901,76.45874c15.013306,31.414917 13.04834,55.553223 8.495361,78.582397c-1.401001,40.383057 -1.867188,82.63562 -16.990845,95.573486c6.668091,29.025879 10.411133,58.05188 -19.114624,87.077881c13.02002,45.847534 -114.057739,152.004761 -135.926514,155.041138c-14.307739,73.171509 -8.86377,144.148315 2.123779,214.509155c23.371582,74.333496 76.258545,108.422607 63.715698,133.802734c-14.501587,29.342896 -80.696045,62.316406 -121.05957,93.449463c4.99585,14.452515 14.904541,21.536011 25.486084,27.610107c27.066772,-95.096069 143.557373,-79.243652 176.279663,-67.963257c38.779663,-16.605713 56.522095,-2.824341 70.08728,16.990723c54.118896,23.91333 106.563721,41.130127 155.041138,42.477051c-36.251099,40.815186 -82.139404,78.125854 -89.201782,129.554932c0.871094,18.599731 -18.248291,53.112671 -44.60083,70.087158c-7.113403,21.219238 -10.125854,44.78186 -36.105591,55.220215c-22.227051,20.343506 -38.556519,44.618774 -84.954102,48.848633c-14.992798,12.486084 -22.52356,26.215942 -53.096313,36.105469c17.271118,10.36853 32.802612,23.172485 36.105591,53.096313c32.960571,32.605225 37.487305,65.552856 33.981567,91.325562c15.747803,20.53064 23.895752,41.061279 25.486206,61.591797c4.862793,34.320068 7.650391,68.294312 -4.247681,99.821045c17.560669,90.479614 -9.029419,134.68457 -40.353149,178.403564c-10.016724,-11.291992 -16.316772,-23.822998 -42.477051,-29.733887c-38.070068,4.499756 -68.807251,-3.832764 -95.573364,-19.114746c-30.497314,0.9021 -78.984863,-4.255615 -104.068848,-22.300415c-60.011719,11.638794 -76.89502,-16.533569 -101.944824,-37.167358c-51.574707,-16.438843 -84.343018,-50.116821 -101.944824,-97.697144c-20.982666,-16.282959 -31.621826,-32.565796 -44.601074,-48.848633c6.262695,20.457886 16.251221,43.39978 6.371826,53.096313c5.36792,24.070313 6.460205,48.140503 -10.619385,72.210938c7.213867,25.345825 15.617188,50.493408 6.371582,78.58252c12.412842,31.316895 3.134766,59.296631 -21.238525,84.954102c1.371582,22.573242 -3.522705,50.368042 -19.114746,87.078003c-39.046631,-51.76416 -114.527832,-86.216431 -190.084717,-129.555054c-27.687012,-10.077637 -43.663574,-27.181396 -57.343994,-45.662842c-43.235352,-26.548096 -69.016113,-52.034424 -62.653809,-79.644409c-25.209473,-17.060303 -35.136719,-81.515991 -12.74292,-101.944946c-24.165527,0.401611 -42.971924,-1.876465 -61.591797,-4.247681c-56.12085,45.051514 -142.863281,72.434204 -259.110107,80.706421c-9.861572,0.701782 -15.481445,-6.511597 -21.238281,-12.743164c-9.157471,10.172974 -12.505615,20.874023 -36.105713,29.733887c-13.60376,85.195801 -76.071289,109.068604 -116.811768,112.564209c-42.939697,32.94397 -83.774902,44.844482 -121.05957,21.238525c-8.293213,5.153809 -15.960938,36.928711 -87.077881,25.486206c-25.081055,11.416016 -45.999512,30.047363 -91.325684,6.371582c2.836426,-25.201172 12.741699,-47.574829 -4.247803,-80.706421c-23.523193,-99.843994 -7.695801,-99.523438 -2.123779,-125.307251c-21.058105,-30.449341 -25.665771,-61.584229 -12.743164,-93.449463c-3.43457,-43.209839 -1.972656,-84.099976 21.238525,-114.68811z"/>
            </g>
            <g display="inline" id="layer3">
                <path onClick={() => props.onFill(0)} fill={props.fillColors[0]} id="path3054" d="m1353.448242,179.508423c11.916992,-26.733643 15.188477,-59.642822 64.777588,-59.467896c26.55249,-16.32666 55.879883,-60.402222 79.644287,-48.848633c46.652344,20.107788 72.76416,-40.378418 118.935791,-18.052612c21.072876,-32.690063 105.956421,-12.212402 148.669678,-33.981689c-1.714966,19.123779 -12.553101,36.727173 1.06189,58.405884c5.500244,39.618286 10.562744,59.681396 1.06189,78.58252c1.411499,31.713501 4.760132,64.589478 -7.433472,88.139893c9.143433,37.314575 4.631592,67.80127 -20.176636,88.139893c-1.00647,61.514282 -73.904175,92.21814 -111.502197,138.050293c19.687134,-44.864136 31.45874,-108.285767 28.671997,-226.190186c-136.377808,14.54126 -217.587769,-5.359863 -303.710815,-64.777466z"/>
                <path onClick={() => props.onFill(1)} fill={props.fillColors[1]} id="path3056" d="m1597.691406,967.457642c36.831787,-59.401733 88.186646,-86.645386 164.598511,-58.406006c35.361572,-11.56897 56.584473,1.099854 72.210938,23.362427c20.816406,3.383911 95.961914,27.747314 126.369263,31.857788c-40.785522,34.335571 -58.614746,66.012329 -67.963257,103.006836c-7.911987,31.309204 -35.57373,45.179688 -47.786621,73.272827c-21.189331,48.741089 -28.383545,34.094482 -37.16748,48.848633c-16.984619,28.528687 -36.706421,50.998047 -77.52063,56.282104c-23.008423,15.0354 -46.016846,41.255493 -69.025269,32.9198c-4.955566,-17.69873 -15.574829,-36.813477 -31.857788,-57.343994c25.660889,-34.493164 27.546997,-86.560425 29.365234,-132.54541c1.806274,-45.687622 3.641235,-85.357544 -0.693237,-100.016479c-2.590576,-8.761353 -31.87146,-17.551636 -60.529663,-21.238525z"/>
                <path onClick={() => props.onFill(2)} fill={props.fillColors[2]} id="path3058" d="m1616.452393,1234.314941c19.885254,23.77832 39.615234,47.556641 45.804565,71.334961c39.056274,14.988037 41.800781,38.045166 45.804688,60.82251c8.05896,14.807739 20.221069,12.177124 21.025024,57.81897c33.337036,65.919312 24.057251,76.687256 25.530396,101.37085c5.648682,23.432373 14.419434,42.404419 6.758057,84.851196c-1.388428,42.815552 6.612061,83.070557 -15.017944,131.406616c-27.25,-6.088501 -58.818115,-1.381592 -78.843872,-25.530396c-22.923462,13.074829 -47.165039,6.376587 -72.085815,-10.512573c-31.287598,10.296997 -62.574707,0.033569 -93.862061,-11.263428c-46.46167,4.812622 -67.651855,-17.943726 -93.111084,-36.042969c-35.105957,-22.443237 -77.205566,-22.157227 -97.616455,-92.360107c-37.337891,-16.011841 -42.610352,-37.36792 -57.818848,-57.067993c79.429932,-27.357422 164.880127,-114.384766 227.52124,-135.912109c70.69873,6.902832 106.824463,-58.633301 135.912109,-138.915527z"/>
                <path onClick={() => props.onFill(3)} fill={props.fillColors[3]} id="path3060" d="m1072.804199,1463.338013c27.046631,17.267212 116.141602,32.426758 153.182617,53.313477c12.212891,18.522095 8.717773,37.044189 7.509033,55.566284c-1.905273,22.001953 11.301025,40.225952 -12.014404,67.580444c14.22168,36.546631 10.063477,61.605591 9.010742,88.605713c0.978271,25.78064 -1.595459,51.561401 -16.519775,77.342163c1.75708,22.966187 -2.825928,44.347168 -9.010742,65.327881c-20.895264,-14.90564 -41.95166,-39.373535 -64.443359,-53.366943c-42.456299,-26.414551 -86.176514,-42.452271 -116.522217,-75.786987c-20.283691,-5.713257 -41.758057,-5.86853 -56.317383,-38.295654c-19.225098,-8.134521 -38.719727,-13.441284 -54.064209,-62.324341c-17.436768,-25.292725 -31.955566,-52.87793 -21.776123,-99.869019c52.284912,5.107422 65.60791,1.865723 92.360107,1.501831c44.737793,-13.440552 66.898438,-54.542358 88.605713,-79.594849z"/>
                <path onClick={() => props.onFill(4)} fill={props.fillColors[4]} id="path3062" d="m92.88623,1416.782349c-3.238037,23.689209 -11.970703,41.098755 -2.252686,79.594849c-9.358887,26.332275 -14.657227,61.526855 5.256348,97.616455c-9.702393,25.161377 -6.312012,88.714478 5.256104,112.634277c10.599121,32.773682 9.410156,60.832031 0,85.602051c35.458984,14.982056 50.781494,-4.55542 73.587646,-11.263428c45.068359,7.317383 72.703369,-5.704224 93.862061,-26.28125c41.807617,25.383057 80.022461,4.056274 117.890625,-21.776001c59.523193,-8.432495 88.086426,-37.917847 97.616211,-80.345825c14.45874,-6.796631 8.781494,-16.110352 8.26001,-24.779541c32.78418,-4.00708 31.842773,-24.877197 42.800781,-39.797363c-3.400391,-30.450195 -25.722412,-46.183594 -46.55542,-63.075195c-72.331055,23.023438 -110.108643,28.491577 -158.438721,24.028564c-69.685547,-6.435059 -106.906006,-47.123657 -159.189941,-71.334961c-29.501953,-6.593384 -36.211182,6.513428 -48.808105,-2.252686c-28.275635,-19.676758 -20.05127,-37.057861 -29.284912,-58.569946z"/>
            </g>
            <g display="inline" id="layer4">
                <path onClick={() => props.onFill(5)} fill={props.fillColors[5]} id="path3065" d="m185.32959,1214.886353c12.5,10.20459 15.626221,18.065674 42.477051,31.857788c13.224365,199.1698 183.19873,164.537109 250.614502,263.357788c-37.633545,0.518555 -66.905762,14.9729 -99.070068,24.606445c-98.811768,29.595337 -172.100098,-93.64502 -259.109863,-78.58252c6.398682,-45.046387 -29.739746,-107.899414 -19.865723,-130.799072c5.266113,-12.212891 24.794678,-22.538208 41.907227,-42.067383c17.449707,-19.913696 32.536377,-49.098267 43.046875,-68.373047z"/>
                <path onClick={() => props.onFill(6)} fill={props.fillColors[6]} id="path3067" d="m240.061523,1245.578369c2.256348,206.261841 238.72998,148.475952 315.375977,346.913452c91.789795,8.188354 178.403809,-12.895874 237.282715,-60.071533c-124.455811,2.428467 -244.529297,-76.057617 -273.325684,-166.69873c-91.952637,-51.633179 -210.920166,-99.682983 -279.333008,-120.143188z"/>
                <path onClick={() => props.onFill(7)} fill={props.fillColors[7]} id="path3069" d="m530.455566,1373.113525c71.923828,175.908691 414.271729,168.892334 479.990479,140.174072c24.924316,-10.891357 62.153564,-85.344727 128.29248,-141.472534c51.522949,-43.724243 124.537842,-87.627319 192.54541,-70.349731c8.791748,2.233765 19.776855,9.202515 27.474121,3.684937c8.251709,-5.915527 4.130859,-19.783691 6.710693,-29.433105c29.029541,-108.581055 97.255615,-197.781494 62.314453,-304.011841c-125.575439,261.827271 -186.273438,181.8573 -294.135986,180.335938c-20.739746,-0.292725 -45.268311,2.315186 -70.104736,10.810791c-37.548584,12.843994 -67.846191,43.600708 -92.764404,65.219849c-62.734863,54.428711 -99.819336,86.03833 -152.75293,77.303345c-12.266113,-2.024048 -22.807129,-11.776001 -35.893066,-11.90625c-17.154785,-0.170654 -31.135742,14.547119 -45.584717,24.697754c-59.550781,41.835449 -110.691162,105.297241 -206.091797,54.946777z"/>
                <path onClick={() => props.onFill(8)} fill={props.fillColors[8]} id="path3071" d="m1083.718994,1444.262451c145.032227,75.97583 174.82959,60.359497 233.350586,13.209961c29.173584,-23.504639 82.05127,-60.792725 122.947998,-85.210938c9.887207,-5.90332 18.300293,-13.282227 27.056641,-15.077026c10.137939,-2.077759 19.782471,-0.338867 28.407227,-1.690796c82.040283,-12.858398 86.60083,-95.15271 107.519531,-134.235718c42.108765,-78.673706 45.008667,-236.932739 36.105469,-226.190186c-8.361572,10.088745 -96.786865,-42.881714 -87.078125,-50.972534c-29.428955,21.361694 -60.277344,46.27063 -100.882813,95.573486c-5.175537,69.190552 -64.789795,177.841919 -78.58252,263.357666c-0.987061,6.119141 -9.739746,9.352905 -15.965332,11.269775c-9.485352,2.92041 -20.643066,2.198486 -29.769775,-0.515259c-83.51001,-24.831421 -175.275879,64.542114 -243.108887,130.481567z"/>
                <path onClick={() => props.onFill(9)} fill={props.fillColors[9]} id="path3073" d="m766.203125,1288.159302c-66.805908,-25.683716 -133.673584,-48.397217 -206.013672,-93.449585c-56.759033,-140.990112 -198.790283,-183.105225 -264.419434,-216.632813c-48.909668,-24.986084 61.381592,-93.842407 113.625977,-144.421997c-60.417969,-62.971558 -97.042725,-140.543701 -33.981689,-279.286499c-93.681396,-6.990967 -164.044678,133.234619 -239.030518,256.927246c-31.243652,51.538086 -66.800049,96.695679 -99.580566,132.737671c-7.054443,7.756348 -16.503662,12.984497 -21.381836,21.300415c-4.285889,7.306519 2.278564,17.690063 9.828613,28.482178c20.991211,30.004517 71.528809,71.202148 122.510986,133.260254c20.516602,24.973877 30.540527,62.467285 59.869141,85.686401c39.37915,31.176636 89.862793,40.877319 141.97168,59.174072c41.321533,14.508911 93.131836,36.075806 142.604004,58.743652c37.561768,17.210571 69.957764,47.185425 103.0271,50.928589c60.283691,6.823608 114.054199,-62.225586 170.970215,-93.449463l0,-0.000122z"/>
                <path onClick={() => props.onFill(10)} fill={props.fillColors[10]} id="path3075" d="m110.994629,804.98291c81.696289,-95.435669 144.298096,-248.154053 253.800293,-260.171875c0.971191,-81.815674 -2.705811,-75.315552 -4.247803,-109.378418c47.432861,5.663574 94.865479,-7.079468 142.298096,-38.22937c-24.395508,-70.831177 20.379883,-133.976807 71.14917,-196.456299c-125.028809,-17.358765 -240.37207,161.680542 -403.531982,83.89209c47.231934,179.687866 -175.798096,358.545166 -59.467773,520.343872z"/>
                <path onClick={() => props.onFill(11)} fill={props.fillColors[11]} id="path3077" d="m509.632813,387.305176c-9.567139,-173.447388 137.193359,-177.818848 256.751709,-250.315918c15.566895,-9.439453 139.775635,-123.394775 199.041504,-116.12085c38.362793,4.708252 60.688477,54.483276 82.600342,81.406982c64.463379,79.207886 250.941895,151.576782 272.573242,242.228638c-47.840332,-6.928589 -151.176758,-101.436768 -166.69873,-96.114502c-25.0354,8.584473 -43.626465,10.138794 -89.356445,41.299316c-47.429199,-78.786987 -102.414063,-42.349243 -157.687988,-1.501831c-45.242676,-14.90686 -94.183105,-41.52417 -116.388916,16.519653c-110.725342,-99.394287 -192.857422,13.277954 -280.834717,82.598511z"/>
                <path onClick={() => props.onFill(12)} fill={props.fillColors[12]} id="path3079" d="m1445.999023,1029.320557c26.522217,-35.149902 56.532227,-67.129028 89.984863,-95.978638c37.73291,-32.541138 122.899536,-68.488647 126.273071,-85.738037c5.349121,-27.352173 -40.177612,-78.30188 -49.572632,-119.591553c-15.961182,-70.147095 -28.819092,-147.207397 -5.367432,-218.944336c32.557983,-99.592285 39.058105,-177.418457 33.914917,-251.667725c-190.561646,61.400757 -402.109741,-176.154663 -507.969604,-99.375854c124.718018,80.363892 204.523193,151.714966 194.095459,193.988647c39.30542,9.175293 94.487549,20.429077 137.251709,28.001587c59.964355,10.618164 102.694824,20.154175 106.03833,60.604004c1.816406,21.974854 0.892822,44.694946 -4.717773,66.779663c-11.897705,46.830444 -27.774902,84.238281 -35.450928,128.500854c-8.000488,46.133545 -12.810791,74.989136 8.733154,118.147827c5.278564,10.574463 21.152588,29.915039 20.923096,43.997803c-0.768555,47.15918 -77.512451,112.028687 -127.652344,165.197021c12.246094,23.961304 12.169922,44.842285 13.516113,66.078735z"/>
                <path onClick={() => props.onFill(13)} fill={props.fillColors[13]} id="path3081" d="m1074.161621,305.877686c18.093018,-18.733765 47.045166,-38.528687 82.830322,-37.167358c14.802002,0.562988 33.227295,19.700195 47.826172,29.081543c39.708252,25.516602 81.744385,49.674927 141.552246,69.675659c93.46167,31.255493 192.69165,27.791992 204.595947,74.33667c18.66748,72.986816 -25.781982,141.14502 -35.445557,199.939941c-11.748291,71.480347 17.811035,127.655884 19.516846,168.548462c2.019531,48.413818 -62.076172,91.038086 -105.323975,135.539673c-51.250244,65.987549 -76.947266,177.360107 -153.786133,197.905151c-31.209473,8.344727 -65.388672,-1.400024 -97.711914,-1.728882c-42.060547,-0.428223 -82.832764,0.432373 -118.920898,5.976563c52.000977,-43.48584 133.577881,-76.217041 211.756836,-110.183716c17.862793,-7.760742 38.277832,-11.350464 52.662598,-23.618896c16.201904,-13.818115 21.706543,-34.56543 28.426025,-51.960815c39.995117,-103.536865 -10.108398,-206.966553 29.5354,-306.29541c6.780273,-16.988403 18.141846,-31.864502 21.683105,-52.709351c3.211914,-18.904541 -1.506592,-39.057129 -25.21167,-49.116699c-29.120361,-12.357544 -71.90625,-3.689697 -102.677246,-12.468628c-37.470703,-10.690552 -57.822021,-25.557373 -79.186523,-36.111816c-5.205811,-21.866455 26.488037,-113.520264 12.74292,-125.307251c-39.865723,-34.18689 -88.000977,-48.260498 -134.864502,-74.334839z"/>
                <path onClick={() => props.onFill(14)} fill={props.fillColors[14]} id="path3083" d="m1195.200195,515.708252c-14.165771,54.959229 -14.398438,135.462402 -21.025146,204.243408c8.693359,34.275146 69.436523,89.355835 9.26123,166.902954c-7.975586,10.278076 -25.438965,29.513672 -38.963867,40.086426c-64.916016,50.746826 -138.600098,111.574341 -223.514648,180.511841c-16.586914,13.466064 -46.164795,27.241455 -62.435547,41.311646c-81.322021,0.312378 -148.114258,-116.886841 -314.325928,-104.350708c-12.467285,-75.661865 -37.233887,-139.05481 -119.414551,-195.308228c-18.582031,10.257324 -175.711182,101.923584 -90.831543,134.705811c75.678223,29.522583 181.254395,78.291626 235.003418,188.179199c7.038574,20.47644 159.140137,124.019531 283.912598,115.185425c36.480225,-2.582764 67.877441,-36.746582 96.040283,-58.117432c17.766602,-13.481689 42.968994,-33.868408 54.893066,-45.710938c75.359619,-74.843506 118.895508,-91.231689 182.389893,-120.987793c148.64624,-44.307983 164.030762,-110.826172 171.204102,-178.713013c0.714844,-74.86377 -14.043213,-97.443848 4.078125,-197.770996c5.139404,-28.454712 30.547363,-62.085205 24.455811,-107.092407c-2.98584,-22.062256 -42.17041,-14.855957 -67.541504,-18.307373c-38.100098,-5.182983 -81.252197,-10.670288 -123.185791,-44.767822z"/>
                <path onClick={() => props.onFill(15)} fill={props.fillColors[15]} id="path3085" d="m1157.655518,719.95166l-22.526855,15.017944c39.840576,139.161499 -190.660889,226.002319 -316.773926,257.383789c-31.596191,7.862305 -65.597412,10.252808 -76.695313,11.436646c-26.472168,-43.565674 -69.987793,-84.687866 -115.429199,-105.578857c-33.852539,-15.563232 -82.155029,-6.670776 -87.3125,-23.575073c-53.312988,-174.744263 -22.116699,-268.4104 51.061035,-318.379517c-3.210205,-76.001099 -3.687744,-111.218384 27.981201,-123.885986c90.014648,-53.489136 128.327148,-85.621948 164.247803,-120.905884c-62.722168,-37.708862 -84.842529,-54.028442 -152.591064,-2.709961c-97.578857,73.512329 -174.095215,145.349243 -254.394043,139.372925c6.878662,39.667603 10.239502,69.688843 13.333984,105.018555c-75.866943,127.90686 -9.874023,254.15564 40.730469,280.941528c91.392578,53.965454 120.000244,129.386719 129.904785,201.239868c116.731445,-29.147095 227.734375,97.910645 286.091064,100.619995c17.851318,0.135376 88.830322,-52.009644 144.705078,-97.574341c56.151123,-45.789917 109.119385,-85.082764 146.268066,-118.377319c22.655273,-20.199585 32.930908,-41.589722 49.93335,-60.377808c14.36499,-15.873413 21.69751,-60.025879 -28.533936,-139.666504z"/>
                <path onClick={() => props.onFill(16)} fill={props.fillColors[16]} id="path3087" d="m589.92334,565.518555c-23.505371,18.051636 -49.794189,50.566895 -60.458496,96.651855c-19.53125,84.402466 16.022217,203.535034 29.655762,204.67395c103.664795,24.705688 145.369873,73.25061 189.029541,116.01123c206.935303,-2.830933 424.062744,-158.580933 378.045898,-245.835938c-33.616211,24.350098 -67.461914,48.413574 -95.573486,79.644531c-66.569824,-47.168213 -176.895752,99.666504 -243.180908,107.254517c-159.77417,-48.193237 -162.395508,-172.253296 -243.181152,-258.579102c23.398682,-26.85083 39.815186,-66.349976 45.662842,-99.821045z"/>
                <path onClick={() => props.onFill(17)} fill={props.fillColors[17]} id="path3089" d="m1141.135742,649.367554c11.65625,-21.455811 0,-77.095703 -2.539795,-124.004395c-1.401123,-25.812622 5.19043,-38.510864 7.654297,-65.984863c1.705811,-19.024658 -1.81543,-42.277222 3.74707,-62.0271c-28.765625,2.036255 -62.264893,-32.206299 -90.583984,-52.811035c-6.894287,-5.016357 -12.412109,-13.317261 -20.780762,-14.89209c-7.054199,-1.327515 -13.619141,5.077515 -20.428467,8.252319c-22.994141,10.720581 -45.988037,25.632446 -68.982178,38.214722l-60.34668,-43.248413c-8.915771,-2.926514 -19.695801,0.428833 -28.708984,-0.187988c-15.461426,-1.058228 -28.819092,-3.490601 -41.012939,5.165039c-53.297607,37.833008 -82.067871,143.855225 -86.120361,190.967529c-45.23291,-7.086426 -87.304688,8.481689 -115.70459,122.032227c24.859863,7.909302 59.378174,-0.203613 73.001465,11.157227c8.654541,7.965576 15.549805,36.334961 15.549805,36.334961l15.690674,62.074951c31.83374,42.55481 82.85083,63.007202 179.560059,30.813965c119.835205,-23.425903 151.429688,-68.842529 202.541992,-78.837891l32.879395,-50.042114c12.938721,5.115356 14.62207,27.91748 18.092285,47.911987c-28.083984,15.219971 -79.535156,55.755005 -123.13916,87.788208c-28.682129,-4.765625 -63.265137,4.080933 -105.071045,27.966553c-48.745117,27.850342 -104.255371,71.946655 -124.702637,74.155273c-83.76416,14.559082 -181.012939,-111.729248 -232.777588,-234.279297c0,0 21.777832,-49.860474 34.063721,-109.212524c9.549072,-46.131714 -6.868652,-71.604492 11.778564,-100.249512c11.928467,-18.323608 69.259521,-54.110352 100.625244,-77.013794c37.521729,-27.398438 70.41333,-54.066528 88.847412,-71.010498c10.259766,-9.430054 13.807861,-17.255981 15.650635,-17.703491c16.429932,-3.990845 59.603516,11.570557 88.844482,6.414673c35.506836,-6.260742 54.695801,-45.12561 90.748291,-44.748169c29.642578,0.310303 39.819824,41.328735 70.831299,64.078857c34.947754,25.637939 81.358887,38.579224 110.119873,58.022339c7.980225,5.394897 20.046875,9.898071 19.242432,18.096313l-2.718262,27.698608c-19.989258,92.703369 -19.570313,195.610962 -28.819336,293.68457l-27.032227,-64.577148z"/>
                <path onClick={() => props.onFill(18)} fill={props.fillColors[18]} id="path3091" d="m946.730713,394.017578c20.912109,-15.365356 43.561035,-29.334106 61.402588,-40.134644c11.216797,-6.789917 18.2854,-13.291016 28.861084,-15.085571c29.556885,26.059448 66.892822,56.446777 97.697266,76.45874c-6.128418,73.081055 -5.477539,150.681519 -3.185791,229.375977c-107.749512,132.444214 -347.86377,196.599487 -391.85083,121.05957c-11.403809,-34.177734 -30.50415,-70.279663 -31.85791,-101.944824c-19.299072,-22.327148 -44.853516,-17.546997 -67.963135,-23.362427c5.939209,-98.303589 61.712891,-102.880859 96.635254,-103.006836c0,0 39.8396,-170.030029 108.316406,-194.33252c39.259033,-13.932861 101.945068,50.972534 101.945068,50.972534z"/>
            </g>
            <g id="layer5">
                <path fill="#222b00" id="path3094" d="m1570.081299,252.781372c59.525757,-49.097046 134.902954,-88.683228 155.04126,-161.412842c-6.033691,48.075073 -53.675903,103.79248 -129.02417,164.598633l-26.01709,-3.185791z"/>
                <path fill="#222b00" id="path3096" d="m1488.84375,241.631104c-2.491455,-42.368164 -28.144531,-49.993652 -46.193848,-69.025146c17.699463,20.972778 42.304443,38.492554 38.760498,70.087036l7.43335,-1.06189z"/>
                <path fill="#222b00" d="m1581.231445,245.878784c-2.491455,-42.368042 -15.932617,-127.51416 -39.29126,-141.76709c20.88501,19.379883 30.623291,118.668091 27.079102,150.262573l12.212158,-8.495483z" id="path3098"/>
                <path fill="#222b00" id="path3100" d="m1646.008911,69.598999c26.18396,29.599609 11.696655,68.442505 9.026367,104.599854c0.777832,-36.128906 6.206665,-73.807983 -9.026367,-104.599854z"/>
                <path fill="#222b00" id="path3102" d="m1678.928589,225.702271c28.450684,23.464111 57.638306,46.637085 48.848633,83.89209c13.402222,-49.030762 -19.869019,-64.938721 -48.848633,-83.89209z"/>
                <path fill="#222b00" id="path3104" d="m1659.813965,278.2677c20.011108,30.438843 26.517212,64.25415 23.893433,100.351929c4.884155,-37.733521 4.801514,-73.811523 -23.893433,-100.351929z"/>
                <path fill="#222b00" id="path3106" d="m1657.159058,1115.06543c58.12146,-77.108887 143.702026,-131.334839 269.729248,-151.855469c-93.796143,12.726074 -187.040161,30.835327 -269.729248,151.855469z"/>
                <path fill="#222b00" d="m1716.37793,1030.370605c11.284058,-38.53479 38.914063,-76.145508 59.629761,-103.746216c-23.657104,22.441772 -49.339966,47.211426 -59.629761,103.746216z" id="path3108"/>
                <path fill="#222b00" id="path3110" d="m1665.632324,996.325684c1.572144,-15.580444 9.477417,-31.974854 15.447144,-44.037354c-7.466064,10.2948 -15.542603,21.626831 -15.447144,44.037354z"/>
                <path fill="#222b00" id="path3112" d="m1790.903931,1029.41394c30.62915,12.391968 69.007446,13.763184 97.395752,14.485962c-26.560669,3.809204 -55.657959,7.737549 -97.395752,-14.485962z"/>
                <path fill="#222b00" d="m1733.88916,1083.019287c25.432251,21.092896 61.589355,34.032593 88.422852,43.326172c-26.465698,-4.420898 -55.384888,-9.49707 -88.422852,-43.326172z" id="path3114"/>
                <path fill="#222b00" id="path3116" d="m1664.055908,1148.722534c25.432251,21.093018 61.589233,34.032715 88.422852,43.326294c-26.465698,-4.420776 -55.384766,-9.49707 -88.422852,-43.326294z"/>
                <path fill="#222b00"id="path3118" d="m1494.684326,1376.299194c200.944336,149.114136 223.211548,228.124146 229.376099,279.286499c-4.773193,-49.816895 -62.741455,-151.886841 -250.614624,-279.286499l21.238525,0z"/>
                <path fill="#222b00" id="path3120" d="m1549.373779,1370.989624c49.597168,-38.939331 98.363403,-27.193481 146.545654,20.176636c-42.09082,-33.756226 -87.606201,-53.814575 -146.545654,-20.176636z"/>
                <path fill="#222b00" id="path3122" d="m1641.76123,1460.191406c38.642456,15.833496 74.090698,35.352417 94.511353,72.210938c-15.008423,-42.136597 -49.848145,-62.553223 -94.511353,-72.210938z"/>
                <path fill="#222b00" id="path3124" d="m1636.982666,1557.88855c-3.443604,38.406372 -3.518311,76.812622 8.495361,115.218994c-6.933105,-38.406372 -8.600708,-76.812622 -8.495361,-115.218994z"/>
                <path fill="#222b00" id="path3126" d="m1549.904541,1467.093872c-54.331055,65.131226 -54.446533,127.740845 -48.848389,190.084717c-16.513184,-104.566406 10.60376,-154.31604 48.848389,-190.084717z"/>
                <path fill="#222b00" id="path3128" d="m1461.764648,1418.776245c-53.927979,16.577026 -76.367188,41.821411 -74.334961,108.847412c1.726074,-44.35083 16.365967,-84.181763 74.334961,-108.847412z"/>
                <path fill="#222b00" id="path3130" d="m1033.006836,1512.145996c-8.761719,125.812744 113.140137,241.10791 136.663086,281.585693c-52.085938,-46.632324 -171.473389,-202.847656 -136.663086,-281.585693z"/>
                <path fill="#222b00" id="path3132" d="m1054.031982,1503.135254c51.296631,-8.76123 101.275879,-13.042847 132.908447,45.053833c-42.969727,-52.346924 -87.996094,-47.100708 -132.908447,-45.053833z"/>
                <path fill="#222b00" id="path3134" d="m1078.060547,1600.000854c73.042969,22.541504 87.928223,64.468994 115.637695,102.121704c-27.853271,-38.443481 -25.41748,-89.358765 -115.637695,-102.121704z"/>
                <path fill="#222b00" id="path3136" d="m1051.02832,1679.595703c-0.375488,19.272949 2.409424,38.545898 12.014404,57.81897c-16.990234,-17.974487 -14.584473,-37.88855 -12.014404,-57.81897z"/>
                <path fill="#222b00" id="path3138" d="m1012.732666,1545.185425c-35.032715,21.668457 -41.980469,62.485596 -33.039307,114.136108c-2.687012,-60.176147 9.710449,-95.985352 33.039307,-114.136108z"/>
                <path fill="#222b00" id="path3140" d="m317.008301,1550.455078c-10.400146,70.865356 -56.707031,144.722778 -168.846191,224.066406c56.630127,-29.720215 159.468262,-99.807617 181.589355,-220.880615l-12.743164,-3.185791z"/>
                <path fill="#222b00" id="path3142" d="m328.689453,1579.127075c16.730957,39.363892 61.132568,91.121094 13.805176,163.536621c74.352783,-73.52356 -7.712158,-140.993286 -13.805176,-185.837036l0,22.300415z"/>
                <path fill="#222b00" id="path3144" d="m428.510498,1549.393188c43.987793,9.509888 30.069092,47.973022 31.85791,78.58252c-0.192627,-34.72522 -1.185547,-68.79541 -31.85791,-78.58252z"/>
                <path fill="#222b00" id="path3146" d="m259.664307,1607.799072c-38.87793,22.128174 -77.370117,48.151367 -121.05957,75.396729c51.403564,-22.352539 86.188965,-50.490479 121.05957,-75.396729z"/>
                <path fill="#222b00" id="path3148" d="m288.336426,1541.959717c-37.561279,0.115234 -73.58667,9.444824 -108.316406,26.548096c31.942139,-21.636719 66.513916,-35.196777 108.316406,-26.548096z"/>
            </g>
            <g id="layer6">
                <path fill="#000000" fill-rule="nonzero" id="path3157" d="m799.853516,801.55896c-11.853027,8.57312 -131.541016,-2.434204 -162.193359,-109.630737c10.620117,78.586304 86.743408,151.694702 198.987305,114.135986l-36.793945,-4.505249z"/>
                <path fill="#000000" fill-rule="nonzero" id="path3159" d="m738.280029,764.01416c72.077148,-35.909546 137.742188,-6.085938 146.424561,27.032227l21.025146,-0.750977c-11.663086,-26.448608 -47.914063,-39.460815 -85.602051,-51.811646c12.589111,-6.76062 39.006104,-9.749878 73.587646,-10.512573c-36.762695,-1.077881 -55.099609,-19.433105 -159.940674,31.537598l4.505371,4.505371z"/>
                <path fill="#000000" fill-rule="nonzero" id="path3161" d="m850.163574,695.682739c-43.736084,-5.838257 -122.738525,-16.349121 -117.515137,-161.817871l10.887939,-27.407715c-11.719482,95.61731 15.588379,176.268066 106.627197,189.225586z"/>
                <path fill="#000000" fill-rule="nonzero" id="path3163" d="m775.824951,593.185425c5.874512,46.69812 71.200439,101.078735 112.258789,132.157593c-45.919922,-27.723145 -120.887939,-85.775879 -112.258789,-132.157593z"/>
                <path fill="#000000" fill-rule="nonzero" id="path3165" d="m1012.567871,464.083374c0,0 63.063232,-5.567627 81.768311,14.866943c24.84082,27.137817 1.132813,74.225464 10.088379,109.909302c3.648682,14.53894 17.554688,26.878906 12.211914,40.884277c-15.784424,41.378906 -79.336914,79.471802 -135.5979,95.158081c-39.989502,11.149658 -79.9729,5.724854 -79.9729,5.724854c0,0 37.728271,11.268677 77.151123,1.668701c58.581055,-14.265381 128.601318,-56.008301 146.384277,-98.834961c6.037598,-14.540161 -9.038086,-26.01416 -12.212158,-44.069946c-6.550049,-37.261353 16.514893,-85.680786 -9.557373,-113.095093c-20.923828,-22.000977 -90.263672,-12.212158 -90.263672,-12.212158z"/>
                <path fill="#000000" fill-rule="nonzero" id="path3167" d="m1061.915771,545.503662c6.583496,-1.881104 21.325928,32.984131 6.758057,57.067993c-5.330322,8.812134 17.327393,18.215454 13.516113,27.783081c-9.995605,25.092773 -51.261963,17.33374 -75.840332,28.53418c-22.522217,10.263306 -65.327881,35.291992 -65.327881,35.291992c-7.619873,4.116333 -17.385742,-6.393677 -20.554199,-7.940918c-55.472656,-27.089478 -105.273926,-62.428955 -132.148926,-96.134277c-30.617432,-38.398926 -0.547607,-163.684448 76.862549,-128.702393c-60.959717,-74.952515 -213.017334,132.924194 55.428467,233.147095c6.551025,2.445801 15.811279,8.165405 22.477051,4.886719c27.470215,-13.511719 50.03418,-30.073242 67.956055,-36.793823c0,0 65.830566,-5.396484 77.154541,-30.786743c5.035889,-11.291748 -16.826904,-18.994263 -11.263672,-30.035767c13.321533,-26.439087 -0.499268,-62.29541 -15.017822,-56.317139z"/>
                <path fill="#000000" fill-rule="nonzero" id="path3169" d="m828.32373,571.868896c29.217285,-62.935791 90.828369,-52.042725 122.652588,-48.848633c18.672607,55.580811 -36.590088,97.486694 -71.14917,101.414063c19.291748,3.893677 106.963623,-11.449219 72.210938,-118.935791c-56.713623,7.402832 -122.623779,6.057983 -123.714355,66.370361z"/>
                <path fill="#000000" fill-rule="nonzero" d="m852.755127,582.120972c21.987793,-29.692383 52.95459,-17.403931 69.210449,-12.325317c3.779053,30.991821 -29.53833,46.922729 -47.984619,45.265137c9.644531,4.099487 57.01709,5.498779 50.41748,-54.290161c-30.374023,-2.220703 -64.606689,-9.990112 -71.643311,21.350342z" id="path3171"/>
                <path fill="#000000" fill-rule="nonzero" id="path3173" d="m829.916504,534.701416c21.17627,-30.029907 28.146729,-61.416382 57.875,-89.201782c7.869873,-7.355591 39.63208,4.612427 74.336426,7.413452c5.09082,0.410889 11.158203,-2.378052 15.39624,0.551025c11.099609,7.671143 11.135254,18.318481 14.906006,29.078979c14.758057,42.115479 -6.750244,89.908813 -28.179932,107.909424c2.391357,0.217407 37.91748,-58.383545 22.726563,-90.32959c-5.083496,-10.69043 6.298096,-22.056396 -15.824219,-31.79187c-1.862061,-0.81958 -42.28833,-11.280029 -70.086914,-18.58374c-33.342041,23.917236 -48.879639,54.116821 -71.14917,84.954102z"/>
                <path fill="#000000" fill-rule="nonzero" id="path3175" d="m907.437256,358.15625c100.671875,63.350708 114.963867,131.590454 119.466553,176.01416c-7.955322,-55.591919 -74.52832,-136.970215 -119.466553,-176.01416z"/>
                <path fill="#000000" fill-rule="nonzero" id="path3177" d="m1002.595215,522.225952c83.715332,110.238403 -9.738525,101.668945 -90.858398,101.37085c60.300049,-10.095093 139.777588,-5.050049 90.858398,-101.37085z"/>
                <path fill="#000000" fill-rule="nonzero" id="path3179" d="m847.910889,646.874512c71.319092,-26.932373 -14.728516,-26.250488 -49.559082,-39.797363c36.814453,17.50354 85.198975,16.055786 49.559082,39.797363z"/>
                <path fill="#000000" fill-rule="nonzero" id="path3181" d="m879.448486,652.130737c17.520996,-3.940674 35.041748,-11.793213 52.562744,-4.505249c-11.579102,-5.76062 -23.373047,-11.258301 -52.562744,4.505249z"/>
            </g>
            </g>
        </svg>
    )
}