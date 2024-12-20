

function toggleMenu() {
    const menu = document.querySelector('.menu');
    const overlay = document.querySelector('.overlay');
    menu.classList.toggle('active'); // Show or hide the menu
    overlay.classList.toggle('active'); // Show or hide the overlay
}

const propertiesData =[
    {
      "id": 1,
      "name": "Mid-Terraced house in Blackrock, Dublin",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate tortor at ipsum efficitur, sed auctor ex dapibus. Proin non ante et ipsum tincidunt venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas sagittis ornare elit, luctus vestibulum arcu vehicula quis. In imperdiet quam interdum, cursus elit ac, congue neque. Mauris blandit eros sit amet tincidunt volutpat. Mauris auctor augue sit amet convallis egestas. Curabitur vitae scelerisque augue. Sed laoreet nunc ut molestie porta. Sed arcu massa, bibendum at purus ac, luctus pulvinar mi. Aliquam semper ligula et purus sagittis condimentum. Mauris volutpat velit sit amet risus sodales porta. Vivamus eget massa vel augue iaculis pharetra.\n\nPraesent vel tempus lorem. Integer eget imperdiet urna, et finibus tellus. Sed vehicula accumsan quam, ac congue sem. Curabitur mollis vestibulum dapibus. Integer et aliquet quam. Suspendisse lacinia quam id vulputate aliquet. Nulla facilisi. Donec accumsan pellentesque pretium. Nulla molestie purus mi, a scelerisque diam viverra eget. Vivamus efficitur, eros id venenatis tincidunt, dolor libero tempor eros, a mollis est augue non orci. Morbi malesuada imperdiet neque a accumsan. Maecenas euismod nibh vitae eleifend fringilla. Aenean consequat diam vestibulum, ultrices ante eu, gravida leo.\n\nSed dapibus dignissim urna, sit amet faucibus ante aliquet quis. Ut imperdiet efficitur ipsum, vel dapibus augue egestas eget. Nullam neque metus, porta eget est sit amet, posuere imperdiet sem. Sed vitae congue ante. Vivamus neque urna, bibendum vitae condimentum sed, iaculis ac mauris. Nullam eget pharetra diam, ut consectetur purus. Aliquam mi lorem, consequat sit amet magna nec, bibendum pellentesque massa. Cras hendrerit quam sed metus vestibulum, ac tincidunt justo egestas. Vestibulum sed erat purus. Morbi vehicula est et magna mattis sollicitudin.\n\nEtiam pellentesque sapien sit amet ante tincidunt cursus. Duis in magna vitae purus auctor sodales quis ut mi. Nam venenatis justo ac neque auctor, et molestie felis rhoncus. Ut nec sollicitudin enim, ac fringilla diam. Mauris dignissim, nibh nec aliquam elementum, risus lorem tempus orci, ut dapibus mauris leo at metus. Morbi sit amet nulla dapibus turpis tincidunt auctor. Nullam auctor id purus eu pulvinar. Curabitur tristique quam sit amet accumsan maximus. Quisque tortor felis, commodo ac ullamcorper non, semper ut ex. Nulla cursus eros ac faucibus vehicula. Suspendisse arcu ex, dapibus et maximus at, vulputate et tellus. In finibus nunc nec est venenatis, ac vestibulum sapien varius. Etiam tincidunt risus ac lacus efficitur sodales. Curabitur ultricies et purus a egestas.\n\nMorbi fringilla ornare enim, eu aliquam purus sagittis quis. Nam iaculis eu dolor non suscipit. Aenean eget tempus quam, et feugiat nisl. Suspendisse molestie ex augue, ac euismod nulla luctus in. Sed porttitor mi mollis, congue nisl quis, vestibulum est. Proin vulputate lorem et enim finibus, ut blandit nulla porta. Proin sed iaculis arcu. Donec suscipit et neque et sagittis. Vivamus quis magna finibus, blandit quam ac, ultrices magna. Cras vitae lorem enim. Phasellus eleifend magna sapien, sed maximus felis gravida semper. Aenean bibendum iaculis turpis varius tristique. Nulla pretium faucibus sagittis. Etiam orci nisl, cursus a ante a, mollis pharetra tellus.",
      "berRating": "C3",
      "price": "€750,000",
      "location": "Blackrock, Dublin",
      "bedrooms": "2",
      "bathrooms": "2",
      "type": "Terraced",
      "category": "To Sell",
      "featuredImage": "https://www.tallboxdesign.com/wp-content/uploads/2023/09/10-6.webp",
      "otherMedia": [
        {
          "type": "image",
          "src": "https://www.nakedkitchens.com/image/catalog/blog/2023/Small%20Kitchens/Shaker%20kitchen%20by%20Far%20Studio%20photo%20Matt%20Clayton.jpg"
        },
        {
          "type": "image",
          "src": "https://media.architecturaldigest.com/photos/5d2f3540dea3bc0008636368/16:9/w_3839,h_2159,c_limit/After-Photo-7.jpg"
        },
        {
          "type": "image",
          "src": "https://www.dreams.co.uk/inspire/wp-content/uploads/hoppyeveleighafter_-1000x1250.jpg"
        },
        {
          "type": "image",
          "src": "https://cdn.decorilla.com/online-decorating/wp-content/uploads/2023/09/Gender-neutral-nursery-color-ideas-with-a-boho-look-scaled.jpeg?width=900"
        }
      ]
    },
    {
      "id": 2,
      "name": "Apartment in Leopardstown, Dublin",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate tortor at ipsum efficitur, sed auctor ex dapibus. Proin non ante et ipsum tincidunt venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas sagittis ornare elit, luctus vestibulum arcu vehicula quis. In imperdiet quam interdum, cursus elit ac, congue neque. Mauris blandit eros sit amet tincidunt volutpat. Mauris auctor augue sit amet convallis egestas. Curabitur vitae scelerisque augue. Sed laoreet nunc ut molestie porta. Sed arcu massa, bibendum at purus ac, luctus pulvinar mi. Aliquam semper ligula et purus sagittis condimentum. Mauris volutpat velit sit amet risus sodales porta. Vivamus eget massa vel augue iaculis pharetra.\n\nPraesent vel tempus lorem. Integer eget imperdiet urna, et finibus tellus. Sed vehicula accumsan quam, ac congue sem. Curabitur mollis vestibulum dapibus. Integer et aliquet quam. Suspendisse lacinia quam id vulputate aliquet. Nulla facilisi. Donec accumsan pellentesque pretium. Nulla molestie purus mi, a scelerisque diam viverra eget. Vivamus efficitur, eros id venenatis tincidunt, dolor libero tempor eros, a mollis est augue non orci. Morbi malesuada imperdiet neque a accumsan. Maecenas euismod nibh vitae eleifend fringilla. Aenean consequat diam vestibulum, ultrices ante eu, gravida leo.\n\nSed dapibus dignissim urna, sit amet faucibus ante aliquet quis. Ut imperdiet efficitur ipsum, vel dapibus augue egestas eget. Nullam neque metus, porta eget est sit amet, posuere imperdiet sem. Sed vitae congue ante. Vivamus neque urna, bibendum vitae condimentum sed, iaculis ac mauris. Nullam eget pharetra diam, ut consectetur purus. Aliquam mi lorem, consequat sit amet magna nec, bibendum pellentesque massa. Cras hendrerit quam sed metus vestibulum, ac tincidunt justo egestas. Vestibulum sed erat purus. Morbi vehicula est et magna mattis sollicitudin.\n\nEtiam pellentesque sapien sit amet ante tincidunt cursus. Duis in magna vitae purus auctor sodales quis ut mi. Nam venenatis justo ac neque auctor, et molestie felis rhoncus. Ut nec sollicitudin enim, ac fringilla diam. Mauris dignissim, nibh nec aliquam elementum, risus lorem tempus orci, ut dapibus mauris leo at metus. Morbi sit amet nulla dapibus turpis tincidunt auctor. Nullam auctor id purus eu pulvinar. Curabitur tristique quam sit amet accumsan maximus. Quisque tortor felis, commodo ac ullamcorper non, semper ut ex. Nulla cursus eros ac faucibus vehicula. Suspendisse arcu ex, dapibus et maximus at, vulputate et tellus. In finibus nunc nec est venenatis, ac vestibulum sapien varius. Etiam tincidunt risus ac lacus efficitur sodales. Curabitur ultricies et purus a egestas.\n\nMorbi fringilla ornare enim, eu aliquam purus sagittis quis. Nam iaculis eu dolor non suscipit. Aenean eget tempus quam, et feugiat nisl. Suspendisse molestie ex augue, ac euismod nulla luctus in. Sed porttitor mi mollis, congue nisl quis, vestibulum est. Proin vulputate lorem et enim finibus, ut blandit nulla porta. Proin sed iaculis arcu. Donec suscipit et neque et sagittis. Vivamus quis magna finibus, blandit quam ac, ultrices magna. Cras vitae lorem enim. Phasellus eleifend magna sapien, sed maximus felis gravida semper. Aenean bibendum iaculis turpis varius tristique. Nulla pretium faucibus sagittis. Etiam orci nisl, cursus a ante a, mollis pharetra tellus.",
      "berRating": "B1",
      "price": "€2,500",
      "location": "Leopardstown, Dublin",
      "bedrooms": "2",
      "bathrooms": "2",
      "type": "Apartment",
      "category": "To Let",
      "featuredImage": "https://mediaserver.4pm.ie/728141/s/34-the-hibernia-building-hsq-kilmainham-dublin-8-d08vwk8-670ab227_5629c5b0_f0d6cd2f_51c89cd4.jpg",
      "otherMedia": [
        {
          "type": "image",
          "src": "https://www.nakedkitchens.com/image/catalog/blog/2023/Small%20Kitchens/Shaker%20kitchen%20by%20Far%20Studio%20photo%20Matt%20Clayton.jpg"
        },
        {
          "type": "image",
          "src": "https://media.architecturaldigest.com/photos/5d2f3540dea3bc0008636368/16:9/w_3839,h_2159,c_limit/After-Photo-7.jpg"
        },
        {
          "type": "image",
          "src": "https://www.dreams.co.uk/inspire/wp-content/uploads/hoppyeveleighafter_-1000x1250.jpg"
        },
        {
          "type": "image",
          "src": "https://cdn.decorilla.com/online-decorating/wp-content/uploads/2023/09/Gender-neutral-nursery-color-ideas-with-a-boho-look-scaled.jpeg?width=900"
        }
      ]
    },
    {
      "id": 3,
      "name": "Apartment in Sandyford, Dublin",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate tortor at ipsum efficitur, sed auctor ex dapibus. Proin non ante et ipsum tincidunt venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas sagittis ornare elit, luctus vestibulum arcu vehicula quis. In imperdiet quam interdum, cursus elit ac, congue neque. Mauris blandit eros sit amet tincidunt volutpat. Mauris auctor augue sit amet convallis egestas. Curabitur vitae scelerisque augue. Sed laoreet nunc ut molestie porta. Sed arcu massa, bibendum at purus ac, luctus pulvinar mi. Aliquam semper ligula et purus sagittis condimentum. Mauris volutpat velit sit amet risus sodales porta. Vivamus eget massa vel augue iaculis pharetra.\n\nPraesent vel tempus lorem. Integer eget imperdiet urna, et finibus tellus. Sed vehicula accumsan quam, ac congue sem. Curabitur mollis vestibulum dapibus. Integer et aliquet quam. Suspendisse lacinia quam id vulputate aliquet. Nulla facilisi. Donec accumsan pellentesque pretium. Nulla molestie purus mi, a scelerisque diam viverra eget. Vivamus efficitur, eros id venenatis tincidunt, dolor libero tempor eros, a mollis est augue non orci. Morbi malesuada imperdiet neque a accumsan. Maecenas euismod nibh vitae eleifend fringilla. Aenean consequat diam vestibulum, ultrices ante eu, gravida leo.\n\nSed dapibus dignissim urna, sit amet faucibus ante aliquet quis. Ut imperdiet efficitur ipsum, vel dapibus augue egestas eget. Nullam neque metus, porta eget est sit amet, posuere imperdiet sem. Sed vitae congue ante. Vivamus neque urna, bibendum vitae condimentum sed, iaculis ac mauris. Nullam eget pharetra diam, ut consectetur purus. Aliquam mi lorem, consequat sit amet magna nec, bibendum pellentesque massa. Cras hendrerit quam sed metus vestibulum, ac tincidunt justo egestas. Vestibulum sed erat purus. Morbi vehicula est et magna mattis sollicitudin.\n\nEtiam pellentesque sapien sit amet ante tincidunt cursus. Duis in magna vitae purus auctor sodales quis ut mi. Nam venenatis justo ac neque auctor, et molestie felis rhoncus. Ut nec sollicitudin enim, ac fringilla diam. Mauris dignissim, nibh nec aliquam elementum, risus lorem tempus orci, ut dapibus mauris leo at metus. Morbi sit amet nulla dapibus turpis tincidunt auctor. Nullam auctor id purus eu pulvinar. Curabitur tristique quam sit amet accumsan maximus. Quisque tortor felis, commodo ac ullamcorper non, semper ut ex. Nulla cursus eros ac faucibus vehicula. Suspendisse arcu ex, dapibus et maximus at, vulputate et tellus. In finibus nunc nec est venenatis, ac vestibulum sapien varius. Etiam tincidunt risus ac lacus efficitur sodales. Curabitur ultricies et purus a egestas.\n\nMorbi fringilla ornare enim, eu aliquam purus sagittis quis. Nam iaculis eu dolor non suscipit. Aenean eget tempus quam, et feugiat nisl. Suspendisse molestie ex augue, ac euismod nulla luctus in. Sed porttitor mi mollis, congue nisl quis, vestibulum est. Proin vulputate lorem et enim finibus, ut blandit nulla porta. Proin sed iaculis arcu. Donec suscipit et neque et sagittis. Vivamus quis magna finibus, blandit quam ac, ultrices magna. Cras vitae lorem enim. Phasellus eleifend magna sapien, sed maximus felis gravida semper. Aenean bibendum iaculis turpis varius tristique. Nulla pretium faucibus sagittis. Etiam orci nisl, cursus a ante a, mollis pharetra tellus.",
      "berRating": "B3",
      "price": "€2,850",
      "location": "Sandyford, Dublin",
      "bedrooms": "2",
      "bathrooms": "2",
      "type": "Apartment",
      "category": "To Let",
      "featuredImage": "https://imengine.public.prod.sbp.infomaker.io/?uuid=09de3fc1-ee3d-5383-8fc7-6dbe0a13e5c8&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.74627&width=1200&height=675&x=1.0E-5&y=0.07794",
      "otherMedia": [
        {
          "type": "image",
          "src": "https://www.nakedkitchens.com/image/catalog/blog/2023/Small%20Kitchens/Shaker%20kitchen%20by%20Far%20Studio%20photo%20Matt%20Clayton.jpg"
        },
        {
          "type": "image",
          "src": "https://media.architecturaldigest.com/photos/5d2f3540dea3bc0008636368/16:9/w_3839,h_2159,c_limit/After-Photo-7.jpg"
        },
        {
          "type": "image",
          "src": "https://www.dreams.co.uk/inspire/wp-content/uploads/hoppyeveleighafter_-1000x1250.jpg"
        },
        {
          "type": "image",
          "src": "https://cdn.decorilla.com/online-decorating/wp-content/uploads/2023/09/Gender-neutral-nursery-color-ideas-with-a-boho-look-scaled.jpeg?width=900"
        }
      ]
    },
    {
      "id": 4,
      "name": "Semi-Detached house in Mount Merrion, Dublin",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate tortor at ipsum efficitur, sed auctor ex dapibus. Proin non ante et ipsum tincidunt venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas sagittis ornare elit, luctus vestibulum arcu vehicula quis. In imperdiet quam interdum, cursus elit ac, congue neque. Mauris blandit eros sit amet tincidunt volutpat. Mauris auctor augue sit amet convallis egestas. Curabitur vitae scelerisque augue. Sed laoreet nunc ut molestie porta. Sed arcu massa, bibendum at purus ac, luctus pulvinar mi. Aliquam semper ligula et purus sagittis condimentum. Mauris volutpat velit sit amet risus sodales porta. Vivamus eget massa vel augue iaculis pharetra.\n\nPraesent vel tempus lorem. Integer eget imperdiet urna, et finibus tellus. Sed vehicula accumsan quam, ac congue sem. Curabitur mollis vestibulum dapibus. Integer et aliquet quam. Suspendisse lacinia quam id vulputate aliquet. Nulla facilisi. Donec accumsan pellentesque pretium. Nulla molestie purus mi, a scelerisque diam viverra eget. Vivamus efficitur, eros id venenatis tincidunt, dolor libero tempor eros, a mollis est augue non orci. Morbi malesuada imperdiet neque a accumsan. Maecenas euismod nibh vitae eleifend fringilla. Aenean consequat diam vestibulum, ultrices ante eu, gravida leo.\n\nSed dapibus dignissim urna, sit amet faucibus ante aliquet quis. Ut imperdiet efficitur ipsum, vel dapibus augue egestas eget. Nullam neque metus, porta eget est sit amet, posuere imperdiet sem. Sed vitae congue ante. Vivamus neque urna, bibendum vitae condimentum sed, iaculis ac mauris. Nullam eget pharetra diam, ut consectetur purus. Aliquam mi lorem, consequat sit amet magna nec, bibendum pellentesque massa. Cras hendrerit quam sed metus vestibulum, ac tincidunt justo egestas. Vestibulum sed erat purus. Morbi vehicula est et magna mattis sollicitudin.\n\nEtiam pellentesque sapien sit amet ante tincidunt cursus. Duis in magna vitae purus auctor sodales quis ut mi. Nam venenatis justo ac neque auctor, et molestie felis rhoncus. Ut nec sollicitudin enim, ac fringilla diam. Mauris dignissim, nibh nec aliquam elementum, risus lorem tempus orci, ut dapibus mauris leo at metus. Morbi sit amet nulla dapibus turpis tincidunt auctor. Nullam auctor id purus eu pulvinar. Curabitur tristique quam sit amet accumsan maximus. Quisque tortor felis, commodo ac ullamcorper non, semper ut ex. Nulla cursus eros ac faucibus vehicula. Suspendisse arcu ex, dapibus et maximus at, vulputate et tellus. In finibus nunc nec est venenatis, ac vestibulum sapien varius. Etiam tincidunt risus ac lacus efficitur sodales. Curabitur ultricies et purus a egestas.\n\nMorbi fringilla ornare enim, eu aliquam purus sagittis quis. Nam iaculis eu dolor non suscipit. Aenean eget tempus quam, et feugiat nisl. Suspendisse molestie ex augue, ac euismod nulla luctus in. Sed porttitor mi mollis, congue nisl quis, vestibulum est. Proin vulputate lorem et enim finibus, ut blandit nulla porta. Proin sed iaculis arcu. Donec suscipit et neque et sagittis. Vivamus quis magna finibus, blandit quam ac, ultrices magna. Cras vitae lorem enim. Phasellus eleifend magna sapien, sed maximus felis gravida semper. Aenean bibendum iaculis turpis varius tristique. Nulla pretium faucibus sagittis. Etiam orci nisl, cursus a ante a, mollis pharetra tellus.",
      "berRating": "C3",
      "price": "€850,000",
      "location": "Blackrock, Dublin",
      "bedrooms": "3",
      "bathrooms": "2",
      "type": "Semi-Detached",
      "category": "To Sell",
      "featuredImage": "https://images.squarespace-cdn.com/content/v1/6040da6f5f712c4a621c6053/1623881788791-V4XA89PUGFEWYTLH129M/Semi-detached-house-UK-Ewelina-W-shutterstock.com.jpg",
      "otherMedia": [
        {
          "type": "image",
          "src": "https://www.nakedkitchens.com/image/catalog/blog/2023/Small%20Kitchens/Shaker%20kitchen%20by%20Far%20Studio%20photo%20Matt%20Clayton.jpg"
        },
        {
          "type": "image",
          "src": "https://media.architecturaldigest.com/photos/5d2f3540dea3bc0008636368/16:9/w_3839,h_2159,c_limit/After-Photo-7.jpg"
        },
        {
          "type": "image",
          "src": "https://www.dreams.co.uk/inspire/wp-content/uploads/hoppyeveleighafter_-1000x1250.jpg"
        },
        {
          "type": "image",
          "src": "https://cdn.decorilla.com/online-decorating/wp-content/uploads/2023/09/Gender-neutral-nursery-color-ideas-with-a-boho-look-scaled.jpeg?width=900"
        }
      ]
    },
    {
      "id": 5,
      "name": "Semi-Detached house in Bray, Wicklow",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate tortor at ipsum efficitur, sed auctor ex dapibus. Proin non ante et ipsum tincidunt venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas sagittis ornare elit, luctus vestibulum arcu vehicula quis. In imperdiet quam interdum, cursus elit ac, congue neque. Mauris blandit eros sit amet tincidunt volutpat. Mauris auctor augue sit amet convallis egestas. Curabitur vitae scelerisque augue. Sed laoreet nunc ut molestie porta. Sed arcu massa, bibendum at purus ac, luctus pulvinar mi. Aliquam semper ligula et purus sagittis condimentum. Mauris volutpat velit sit amet risus sodales porta. Vivamus eget massa vel augue iaculis pharetra.\n\nPraesent vel tempus lorem. Integer eget imperdiet urna, et finibus tellus. Sed vehicula accumsan quam, ac congue sem. Curabitur mollis vestibulum dapibus. Integer et aliquet quam. Suspendisse lacinia quam id vulputate aliquet. Nulla facilisi. Donec accumsan pellentesque pretium. Nulla molestie purus mi, a scelerisque diam viverra eget. Vivamus efficitur, eros id venenatis tincidunt, dolor libero tempor eros, a mollis est augue non orci. Morbi malesuada imperdiet neque a accumsan. Maecenas euismod nibh vitae eleifend fringilla. Aenean consequat diam vestibulum, ultrices ante eu, gravida leo.\n\nSed dapibus dignissim urna, sit amet faucibus ante aliquet quis. Ut imperdiet efficitur ipsum, vel dapibus augue egestas eget. Nullam neque metus, porta eget est sit amet, posuere imperdiet sem. Sed vitae congue ante. Vivamus neque urna, bibendum vitae condimentum sed, iaculis ac mauris. Nullam eget pharetra diam, ut consectetur purus. Aliquam mi lorem, consequat sit amet magna nec, bibendum pellentesque massa. Cras hendrerit quam sed metus vestibulum, ac tincidunt justo egestas. Vestibulum sed erat purus. Morbi vehicula est et magna mattis sollicitudin.\n\nEtiam pellentesque sapien sit amet ante tincidunt cursus. Duis in magna vitae purus auctor sodales quis ut mi. Nam venenatis justo ac neque auctor, et molestie felis rhoncus. Ut nec sollicitudin enim, ac fringilla diam. Mauris dignissim, nibh nec aliquam elementum, risus lorem tempus orci, ut dapibus mauris leo at metus. Morbi sit amet nulla dapibus turpis tincidunt auctor. Nullam auctor id purus eu pulvinar. Curabitur tristique quam sit amet accumsan maximus. Quisque tortor felis, commodo ac ullamcorper non, semper ut ex. Nulla cursus eros ac faucibus vehicula. Suspendisse arcu ex, dapibus et maximus at, vulputate et tellus. In finibus nunc nec est venenatis, ac vestibulum sapien varius. Etiam tincidunt risus ac lacus efficitur sodales. Curabitur ultricies et purus a egestas.\n\nMorbi fringilla ornare enim, eu aliquam purus sagittis quis. Nam iaculis eu dolor non suscipit. Aenean eget tempus quam, et feugiat nisl. Suspendisse molestie ex augue, ac euismod nulla luctus in. Sed porttitor mi mollis, congue nisl quis, vestibulum est. Proin vulputate lorem et enim finibus, ut blandit nulla porta. Proin sed iaculis arcu. Donec suscipit et neque et sagittis. Vivamus quis magna finibus, blandit quam ac, ultrices magna. Cras vitae lorem enim. Phasellus eleifend magna sapien, sed maximus felis gravida semper. Aenean bibendum iaculis turpis varius tristique. Nulla pretium faucibus sagittis. Etiam orci nisl, cursus a ante a, mollis pharetra tellus.",
      "berRating": "B2",
      "price": "€650,000",
      "location": "Bray, Wicklow",
      "bedrooms": "3",
      "bathrooms": "2",
      "type": "Semi-Detached",
      "category": "To Sell",
      "featuredImage": "https://media.propertypal.com/0224019b000570c824/p/924935/35921196.jpg",
      "otherMedia": [
        {
          "type": "image",
          "src": "https://www.nakedkitchens.com/image/catalog/blog/2023/Small%20Kitchens/Shaker%20kitchen%20by%20Far%20Studio%20photo%20Matt%20Clayton.jpg"
        },
        {
          "type": "image",
          "src": "https://media.architecturaldigest.com/photos/5d2f3540dea3bc0008636368/16:9/w_3839,h_2159,c_limit/After-Photo-7.jpg"
        },
        {
          "type": "image",
          "src": "https://www.dreams.co.uk/inspire/wp-content/uploads/hoppyeveleighafter_-1000x1250.jpg"
        },
        {
          "type": "image",
          "src": "https://cdn.decorilla.com/online-decorating/wp-content/uploads/2023/09/Gender-neutral-nursery-color-ideas-with-a-boho-look-scaled.jpeg?width=900"
        }
      ]
    },
    {
      "id": 6,
      "name": "Detached house in Clonee, Meath",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate tortor at ipsum efficitur, sed auctor ex dapibus. Proin non ante et ipsum tincidunt venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas sagittis ornare elit, luctus vestibulum arcu vehicula quis. In imperdiet quam interdum, cursus elit ac, congue neque. Mauris blandit eros sit amet tincidunt volutpat. Mauris auctor augue sit amet convallis egestas. Curabitur vitae scelerisque augue. Sed laoreet nunc ut molestie porta. Sed arcu massa, bibendum at purus ac, luctus pulvinar mi. Aliquam semper ligula et purus sagittis condimentum. Mauris volutpat velit sit amet risus sodales porta. Vivamus eget massa vel augue iaculis pharetra.\n\nPraesent vel tempus lorem. Integer eget imperdiet urna, et finibus tellus. Sed vehicula accumsan quam, ac congue sem. Curabitur mollis vestibulum dapibus. Integer et aliquet quam. Suspendisse lacinia quam id vulputate aliquet. Nulla facilisi. Donec accumsan pellentesque pretium. Nulla molestie purus mi, a scelerisque diam viverra eget. Vivamus efficitur, eros id venenatis tincidunt, dolor libero tempor eros, a mollis est augue non orci. Morbi malesuada imperdiet neque a accumsan. Maecenas euismod nibh vitae eleifend fringilla. Aenean consequat diam vestibulum, ultrices ante eu, gravida leo.\n\nSed dapibus dignissim urna, sit amet faucibus ante aliquet quis. Ut imperdiet efficitur ipsum, vel dapibus augue egestas eget. Nullam neque metus, porta eget est sit amet, posuere imperdiet sem. Sed vitae congue ante. Vivamus neque urna, bibendum vitae condimentum sed, iaculis ac mauris. Nullam eget pharetra diam, ut consectetur purus. Aliquam mi lorem, consequat sit amet magna nec, bibendum pellentesque massa. Cras hendrerit quam sed metus vestibulum, ac tincidunt justo egestas. Vestibulum sed erat purus. Morbi vehicula est et magna mattis sollicitudin.\n\nEtiam pellentesque sapien sit amet ante tincidunt cursus. Duis in magna vitae purus auctor sodales quis ut mi. Nam venenatis justo ac neque auctor, et molestie felis rhoncus. Ut nec sollicitudin enim, ac fringilla diam. Mauris dignissim, nibh nec aliquam elementum, risus lorem tempus orci, ut dapibus mauris leo at metus. Morbi sit amet nulla dapibus turpis tincidunt auctor. Nullam auctor id purus eu pulvinar. Curabitur tristique quam sit amet accumsan maximus. Quisque tortor felis, commodo ac ullamcorper non, semper ut ex. Nulla cursus eros ac faucibus vehicula. Suspendisse arcu ex, dapibus et maximus at, vulputate et tellus. In finibus nunc nec est venenatis, ac vestibulum sapien varius. Etiam tincidunt risus ac lacus efficitur sodales. Curabitur ultricies et purus a egestas.\n\nMorbi fringilla ornare enim, eu aliquam purus sagittis quis. Nam iaculis eu dolor non suscipit. Aenean eget tempus quam, et feugiat nisl. Suspendisse molestie ex augue, ac euismod nulla luctus in. Sed porttitor mi mollis, congue nisl quis, vestibulum est. Proin vulputate lorem et enim finibus, ut blandit nulla porta. Proin sed iaculis arcu. Donec suscipit et neque et sagittis. Vivamus quis magna finibus, blandit quam ac, ultrices magna. Cras vitae lorem enim. Phasellus eleifend magna sapien, sed maximus felis gravida semper. Aenean bibendum iaculis turpis varius tristique. Nulla pretium faucibus sagittis. Etiam orci nisl, cursus a ante a, mollis pharetra tellus.",
      "berRating": "A2",
      "price": "€1,150,000",
      "location": "Clonee, Meath",
      "bedrooms": "5",
      "bathrooms": "3",
      "type": "Detached",
      "category": "To Sell",
      "featuredImage": "https://photos-a.propertyimages.ie/media/7/8/2/4835287/4bb8908f-c073-48c0-bf8d-07da1d9f6fe6_l.jpg",
      "otherMedia": [
        {
          "type": "image",
          "src": "https://www.nakedkitchens.com/image/catalog/blog/2023/Small%20Kitchens/Shaker%20kitchen%20by%20Far%20Studio%20photo%20Matt%20Clayton.jpg"
        },
        {
          "type": "image",
          "src": "https://media.architecturaldigest.com/photos/5d2f3540dea3bc0008636368/16:9/w_3839,h_2159,c_limit/After-Photo-7.jpg"
        },
        {
          "type": "image",
          "src": "https://www.dreams.co.uk/inspire/wp-content/uploads/hoppyeveleighafter_-1000x1250.jpg"
        },
        {
          "type": "image",
          "src": "https://cdn.decorilla.com/online-decorating/wp-content/uploads/2023/09/Gender-neutral-nursery-color-ideas-with-a-boho-look-scaled.jpeg?width=900"
        }
      ]
    },
    {
      "id": 7,
      "name": "Apartment in Ballsbridge, Dublin",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate tortor at ipsum efficitur, sed auctor ex dapibus. Proin non ante et ipsum tincidunt venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas sagittis ornare elit, luctus vestibulum arcu vehicula quis. In imperdiet quam interdum, cursus elit ac, congue neque. Mauris blandit eros sit amet tincidunt volutpat. Mauris auctor augue sit amet convallis egestas. Curabitur vitae scelerisque augue. Sed laoreet nunc ut molestie porta. Sed arcu massa, bibendum at purus ac, luctus pulvinar mi. Aliquam semper ligula et purus sagittis condimentum. Mauris volutpat velit sit amet risus sodales porta. Vivamus eget massa vel augue iaculis pharetra.\n\nPraesent vel tempus lorem. Integer eget imperdiet urna, et finibus tellus. Sed vehicula accumsan quam, ac congue sem. Curabitur mollis vestibulum dapibus. Integer et aliquet quam. Suspendisse lacinia quam id vulputate aliquet. Nulla facilisi. Donec accumsan pellentesque pretium. Nulla molestie purus mi, a scelerisque diam viverra eget. Vivamus efficitur, eros id venenatis tincidunt, dolor libero tempor eros, a mollis est augue non orci. Morbi malesuada imperdiet neque a accumsan. Maecenas euismod nibh vitae eleifend fringilla. Aenean consequat diam vestibulum, ultrices ante eu, gravida leo.\n\nSed dapibus dignissim urna, sit amet faucibus ante aliquet quis. Ut imperdiet efficitur ipsum, vel dapibus augue egestas eget. Nullam neque metus, porta eget est sit amet, posuere imperdiet sem. Sed vitae congue ante. Vivamus neque urna, bibendum vitae condimentum sed, iaculis ac mauris. Nullam eget pharetra diam, ut consectetur purus. Aliquam mi lorem, consequat sit amet magna nec, bibendum pellentesque massa. Cras hendrerit quam sed metus vestibulum, ac tincidunt justo egestas. Vestibulum sed erat purus. Morbi vehicula est et magna mattis sollicitudin.\n\nEtiam pellentesque sapien sit amet ante tincidunt cursus. Duis in magna vitae purus auctor sodales quis ut mi. Nam venenatis justo ac neque auctor, et molestie felis rhoncus. Ut nec sollicitudin enim, ac fringilla diam. Mauris dignissim, nibh nec aliquam elementum, risus lorem tempus orci, ut dapibus mauris leo at metus. Morbi sit amet nulla dapibus turpis tincidunt auctor. Nullam auctor id purus eu pulvinar. Curabitur tristique quam sit amet accumsan maximus. Quisque tortor felis, commodo ac ullamcorper non, semper ut ex. Nulla cursus eros ac faucibus vehicula. Suspendisse arcu ex, dapibus et maximus at, vulputate et tellus. In finibus nunc nec est venenatis, ac vestibulum sapien varius. Etiam tincidunt risus ac lacus efficitur sodales. Curabitur ultricies et purus a egestas.\n\nMorbi fringilla ornare enim, eu aliquam purus sagittis quis. Nam iaculis eu dolor non suscipit. Aenean eget tempus quam, et feugiat nisl. Suspendisse molestie ex augue, ac euismod nulla luctus in. Sed porttitor mi mollis, congue nisl quis, vestibulum est. Proin vulputate lorem et enim finibus, ut blandit nulla porta. Proin sed iaculis arcu. Donec suscipit et neque et sagittis. Vivamus quis magna finibus, blandit quam ac, ultrices magna. Cras vitae lorem enim. Phasellus eleifend magna sapien, sed maximus felis gravida semper. Aenean bibendum iaculis turpis varius tristique. Nulla pretium faucibus sagittis. Etiam orci nisl, cursus a ante a, mollis pharetra tellus.",
      "berRating": "B1",
      "price": "€3,500",
      "location": "Ballsbridge, Dublin",
      "bedrooms": "2",
      "bathrooms": "2",
      "type": "Apartment",
      "category": "To Let",
      "featuredImage": "https://www.shutterstock.com/image-photo/harrow-london-11th-april-2019-600nw-1375572119.jpg",
      "otherMedia": [
        {
          "type": "image",
          "src": "https://www.nakedkitchens.com/image/catalog/blog/2023/Small%20Kitchens/Shaker%20kitchen%20by%20Far%20Studio%20photo%20Matt%20Clayton.jpg"
        },
        {
          "type": "image",
          "src": "https://media.architecturaldigest.com/photos/5d2f3540dea3bc0008636368/16:9/w_3839,h_2159,c_limit/After-Photo-7.jpg"
        },
        {
          "type": "image",
          "src": "https://www.dreams.co.uk/inspire/wp-content/uploads/hoppyeveleighafter_-1000x1250.jpg"
        },
        {
          "type": "image",
          "src": "https://cdn.decorilla.com/online-decorating/wp-content/uploads/2023/09/Gender-neutral-nursery-color-ideas-with-a-boho-look-scaled.jpeg?width=900"
        }
      ]
    },
    {
      "id": 8,
      "name": "Apartment in Grand Canal, Dublin",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate tortor at ipsum efficitur, sed auctor ex dapibus. Proin non ante et ipsum tincidunt venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas sagittis ornare elit, luctus vestibulum arcu vehicula quis. In imperdiet quam interdum, cursus elit ac, congue neque. Mauris blandit eros sit amet tincidunt volutpat. Mauris auctor augue sit amet convallis egestas. Curabitur vitae scelerisque augue. Sed laoreet nunc ut molestie porta. Sed arcu massa, bibendum at purus ac, luctus pulvinar mi. Aliquam semper ligula et purus sagittis condimentum. Mauris volutpat velit sit amet risus sodales porta. Vivamus eget massa vel augue iaculis pharetra.\n\nPraesent vel tempus lorem. Integer eget imperdiet urna, et finibus tellus. Sed vehicula accumsan quam, ac congue sem. Curabitur mollis vestibulum dapibus. Integer et aliquet quam. Suspendisse lacinia quam id vulputate aliquet. Nulla facilisi. Donec accumsan pellentesque pretium. Nulla molestie purus mi, a scelerisque diam viverra eget. Vivamus efficitur, eros id venenatis tincidunt, dolor libero tempor eros, a mollis est augue non orci. Morbi malesuada imperdiet neque a accumsan. Maecenas euismod nibh vitae eleifend fringilla. Aenean consequat diam vestibulum, ultrices ante eu, gravida leo.\n\nSed dapibus dignissim urna, sit amet faucibus ante aliquet quis. Ut imperdiet efficitur ipsum, vel dapibus augue egestas eget. Nullam neque metus, porta eget est sit amet, posuere imperdiet sem. Sed vitae congue ante. Vivamus neque urna, bibendum vitae condimentum sed, iaculis ac mauris. Nullam eget pharetra diam, ut consectetur purus. Aliquam mi lorem, consequat sit amet magna nec, bibendum pellentesque massa. Cras hendrerit quam sed metus vestibulum, ac tincidunt justo egestas. Vestibulum sed erat purus. Morbi vehicula est et magna mattis sollicitudin.\n\nEtiam pellentesque sapien sit amet ante tincidunt cursus. Duis in magna vitae purus auctor sodales quis ut mi. Nam venenatis justo ac neque auctor, et molestie felis rhoncus. Ut nec sollicitudin enim, ac fringilla diam. Mauris dignissim, nibh nec aliquam elementum, risus lorem tempus orci, ut dapibus mauris leo at metus. Morbi sit amet nulla dapibus turpis tincidunt auctor. Nullam auctor id purus eu pulvinar. Curabitur tristique quam sit amet accumsan maximus. Quisque tortor felis, commodo ac ullamcorper non, semper ut ex. Nulla cursus eros ac faucibus vehicula. Suspendisse arcu ex, dapibus et maximus at, vulputate et tellus. In finibus nunc nec est venenatis, ac vestibulum sapien varius. Etiam tincidunt risus ac lacus efficitur sodales. Curabitur ultricies et purus a egestas.\n\nMorbi fringilla ornare enim, eu aliquam purus sagittis quis. Nam iaculis eu dolor non suscipit. Aenean eget tempus quam, et feugiat nisl. Suspendisse molestie ex augue, ac euismod nulla luctus in. Sed porttitor mi mollis, congue nisl quis, vestibulum est. Proin vulputate lorem et enim finibus, ut blandit nulla porta. Proin sed iaculis arcu. Donec suscipit et neque et sagittis. Vivamus quis magna finibus, blandit quam ac, ultrices magna. Cras vitae lorem enim. Phasellus eleifend magna sapien, sed maximus felis gravida semper. Aenean bibendum iaculis turpis varius tristique. Nulla pretium faucibus sagittis. Etiam orci nisl, cursus a ante a, mollis pharetra tellus.",
      "berRating": "A3",
      "price": "€3,800",
      "location": "Grand Canal, Dublin",
      "bedrooms": "3",
      "bathrooms": "2",
      "type": "Apartment",
      "category": "To Let",
      "featuredImage": "https://www.wienerberger.co.uk/about-us/news-blogs/apartment-building-designs/jcr%3Acontent/root/imagegallery_copy_co_681803661/image_159620942/image.imgTransformer/crop_web/md-3/1719570292479/UK_MKT_PHO_REF_From_Here_The_Loom_002.jpg",
      "otherMedia": [
        {
          "type": "image",
          "src": "https://www.nakedkitchens.com/image/catalog/blog/2023/Small%20Kitchens/Shaker%20kitchen%20by%20Far%20Studio%20photo%20Matt%20Clayton.jpg"
        },
        {
          "type": "image",
          "src": "https://media.architecturaldigest.com/photos/5d2f3540dea3bc0008636368/16:9/w_3839,h_2159,c_limit/After-Photo-7.jpg"
        },
        {
          "type": "image",
          "src": "https://www.dreams.co.uk/inspire/wp-content/uploads/hoppyeveleighafter_-1000x1250.jpg"
        },
        {
          "type": "image",
          "src": "https://cdn.decorilla.com/online-decorating/wp-content/uploads/2023/09/Gender-neutral-nursery-color-ideas-with-a-boho-look-scaled.jpeg?width=900"
        }
      ]
    }
  ];

  
  // Function to render properties
// Function to render properties
function renderProperties(data) {
    const propertiesContainer = document.querySelector('.properties');
    propertiesContainer.innerHTML = ''; // Clear existing content

    data.forEach(property => {
        const card = document.createElement('div');
        card.className = 'property-card';

        // Set onclick event to navigate to details page
        card.onclick = () => viewDetails(property.id);

        // Card HTML structure with updated fields
        card.innerHTML = `
            <img src="${property.featuredImage}" alt="${property.name}" class="property-image">
            <div class="property-info">
                <h3>${property.name}</h3>
                <p>${property.description.substring(0, 100)}...</p>
                <p><strong>Location:</strong> ${property.location}</p>
                <p><strong>Price:</strong> ${property.price}</p>
                <p><strong>BER Rating:</strong> ${property.berRating}</p>
                <p><strong>Bedrooms:</strong> ${property.bedrooms}</p>
                <p><strong>Bathrooms:</strong> ${property.bathrooms}</p>
            </div>
        `;
        
        propertiesContainer.appendChild(card);
    });
}

  function viewDetails(propertyId) {
      const selectedProperty = propertiesData.find(property => property.id === propertyId);
      sessionStorage.setItem('selectedProperty', JSON.stringify(selectedProperty));
      window.location.href = 'details.html';
  }
  
  // Initialize with full property data
  renderProperties(propertiesData);
  
  function searchProperties() {
      const query = document.getElementById('searchInput').value.toLowerCase();
      const filteredProperties = propertiesData.filter(property =>
          property.name.toLowerCase().includes(query) ||
          property.location.toLowerCase().includes(query)
      );
      renderProperties(filteredProperties);
  }

  // Populate location options dynamically from JSON data
const locationFilter = document.getElementById("locationFilter");
const uniqueLocations = [...new Set(propertiesData.map(property => property.location))];
uniqueLocations.forEach(location => {
    const option = document.createElement("option");
    option.value = location;
    option.text = location;
    locationFilter.appendChild(option);
});

// Display range values for price with a single range slider
const priceRange = document.getElementById("priceRange");
const priceMinDisplay = document.getElementById("priceMinDisplay");
const priceMaxDisplay = document.getElementById("priceMaxDisplay");

// Adjust display values for price based on range slider
priceRange.addEventListener("input", () => {
    const value = parseInt(priceRange.value);
    priceMinDisplay.textContent = `€${(value * 0.2).toLocaleString()}`;
    priceMaxDisplay.textContent = `€${(value).toLocaleString()}`;
});

// Filter properties based on location and price range
function applyFilters() {
    const selectedLocation = locationFilter.value;
    const maxPrice = parseInt(priceRange.value) || 2000000;

    const filteredProperties = propertiesData.filter(property => {
        const matchesLocation = selectedLocation === "" || property.location === selectedLocation;
        const propertyPrice = parseInt(property.price.replace(/[€,]/g, ''));
        const matchesPrice = propertyPrice <= maxPrice;

        return matchesLocation && matchesPrice;
    });

    renderProperties(filteredProperties);
}

  


function openModal() {
    document.getElementById('bookingModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('bookingModal').style.display = 'none';
}

function submitBooking(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    alert(`Thank you, ${name}! Your viewing has been booked.`);
    closeModal();
    document.getElementById('bookingForm').reset();
}


