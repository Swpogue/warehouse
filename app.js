let package = null



const packages = [{
  priorityLevel: 'express',
  isFragile: false,
  weight: 2,
  to: 'Sir Harrington IV',
  trackingNumber: '1324kjs'
},
{
  priorityLevel: 'standard',
  isFragile: true,
  weight: .5,
  to: 'Master Mercutio',
  trackingNumber: '1325sdk'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: .5,
  to: 'Mistress Ravenfeather',
  trackingNumber: 'jffd147'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 4,
  to: 'B. Robert Brown',
  trackingNumber: 'acdc145'
},
{
  priorityLevel: 'express',
  isFragile: true,
  weight: 6,
  to: 'Chancellor Wallace',
  trackingNumber: '4b2l0z'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 5,
  to: 'Sarah Sharm',
  trackingNumber: '8081baz'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: 12,
  to: 'Tae Lien',
  trackingNumber: 'suz2367'
}]


/**
 * 
 * @param {string} trackingNumber 
 */
// function findPackageByTrackingNumber(trackingNumber) {
//   if (trackingNumber == package.trackingNumber) {
//     alert("Found It!")
//     return
    
//   }
  
// }

let allPackages = packages

function drawMyPackages(){
  let template = ''
  allPackages.forEach(package => template += `
  <div class="card text-center bg-success text-white">
  <p>${package.to}-&nbsp &nbsp &nbsp &nbsp Priority- "${package.priorityLevel}" ID#'${package.trackingNumber}'</p>
  </div>
  `)
  // document.getElementById('packageList').innerHTML = template <--- also works

  let packageElement = document.getElementById('packageList')
  packageElement.innerHTML = template
}
drawMyPackages()

function filterFragilePackages(){
  allPackages = allPackages.filter(package => package.isFragile == true)
  console.log('these are my fragile packages', allPackages);
  drawMyPackages()
}
function filterHeavy(){
  allPackages = allPackages.filter(package => package.weight >= 5)
  console.log('these are my heavy packages', allPackages);
  drawMyPackages()
}
function filterPriority(){
  allPackages = allPackages.filter(package => package.priorityLevel === 'express')
  console.log('these are my priority packages', allPackages);
  drawMyPackages()
}


function resetPackages() { 
  window.location.reload()
    
  }

