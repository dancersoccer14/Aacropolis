import { m } from "./site";

export type Post = {
  slug: string;
  title: string;
  date: string; // ISO
  updated?: string;
  image: string; // Wix media file name or absolute URL
  excerpt: string;
  body: string[]; // paragraphs; **bold** not parsed
  callout?: string;
};

/**
 * Local copy of the Wix blog. Used as the fallback when WIX_CLIENT_ID is not set.
 * Older journal entries (#1-#5) are not in this copy; see README.
 */
export const LOCAL_POSTS: Post[] = [
  {
    slug: "why-choose-aacropolis-homes-for-your-acreage-build",
    title: "Why Choose Aacropolis Homes For Your Acreage Build?",
    date: "2025-01-26",
    updated: "2025-06-03",
    image: m("be8a16bec2264fe78041ba9a98f9a840~mv2_d_2550_1913_s_2.jpg"),
    excerpt:
      "Choosing the right builder is always an important decision, but when considering an acreage build it’s even more important to find a...",
    body: [
      "Choosing the right builder is always an important decision, but when considering an acreage build it’s even more important to find a builder with not only experience with acreages but also the process to make it a seamless build.",
      "Aacropolis Homes has over 30 years of experience building custom estate homes. We have built many acreage homes around Edmonton over those 30 plus years. Aligning with a team that understands the intricacies of an acreage build is important, as there are many things to consider throughout the process.",
      "The first thing we can help with is identifying where you want to live. We can set you up with a realtor partner to find the right property for your dream home. Not all lots and build sites will offer the same opportunities. Things to consider when looking at where to build is what the site preparation will entail. Some lots will come with a lot of trees, so tree removal and site preparation will be both crucial and often expensive. Not every lot listed for sale will be serviced, we will help you to determine what the budget for bringing in power, water, septic and gas will be. Additionally, we will help you look at the soil conditions to see if the land is appropriate for a home build or if additional preparation will be needed.",
      "We can meet you at the property to determine where the best place for your home build is. It’s exciting to consider views that you may get from important rooms in your home. Additionally, we can look at the land and work with you on a layout for the driveway, landscaping and help you visualize where the rooms would make sense for your home floor plan.",
      "Once you choose your location and lot, we can work with you on designing your dream home, considering the property, the needs of you and your family to develop a home layout that you will love!",
      "We will work with you on determining all the specifications of your home for both interior and exterior finishes and work with you to establish a budget for your home build. Factoring in all the potential expenses that can come up in developing your acreage we can help minimize any surprises throughout the home build. It is important to us that you have a clear understanding of the cost of your home project.",
      "We have experience working with different municipalities, so we will take care of all the red tape and permitting needed to get started! All of our homes are built using the very best trade and supply partners. Our team and partners will lend all of their experience in acreage building to guide you through the process.",
    ],
    callout: "Getting started is as easy as giving Casey a call at 825.510.2298! We are here to help you make all your acreage dreams come true!",
  },
  {
    slug: "rear-lane-attached-homes-in-keswick-on-the-river",
    title: "Rear Lane Attached Homes in Keswick on the River",
    date: "2024-12-19",
    updated: "2025-06-03",
    image: m("f5478cb69f0447469ea60c424bf53b5e~mv2.jpg"),
    excerpt:
      "While Aacropolis has a long history of luxury custom homes throughout Edmonton and surrounding area, did you know that we have a very...",
    body: [
      "While Aacropolis has a long history of luxury custom homes throughout Edmonton and surrounding area, did you know that we have a very special product line in Keswick on the River? And even more impressive is the price point!",
      "Our 2 storey, attached garage homes with tones of curb appeal start in the mid $700,000’s. These homes offer a rear lane access with an extremely attractive streetscape, just a stones throw from Edmonton’s pristine river valley.",
      "These rear lane- attached homes come with an abundance of large windows, high ceilings, thoughtfully planned layouts including open concept kitchens as well as large bedrooms. Design features such as a linear fireplace, modern lighting and lots storage are all included in our homes!",
      "Whether you are looking for a move in ready, pre-designed home or want to customize your own design we have options for you!",
      "Award winning and prestigious Keswick on the River in south west Edmonton is almost complete, our remaining laned lots are some of the last opportunities to call this area home. With quiet walking trails, parks and close proximity to schools this community flanks the river valley.",
    ],
    callout: "Visit our show home at 4541 Knight Wynd SW or call 825.510.2298 to learn more!",
  },
  {
    slug: "follow-along-our-dream-home-build-infill-edition-journal-entry-7-possession-and-warranty",
    title: "Follow Along Our Dream Home Build: Infill Edition (Journal Entry #7) Possession and Warranty",
    date: "2024-06-19",
    updated: "2025-06-03",
    image: m("fb344086d5c045089a4305ea45da6bee~mv2.jpg"),
    excerpt:
      "Journal Entry #7: Possession and Warranty The journey to creating your dream home is almost complete and we are almost ready to hand over...",
    body: [
      "Journal Entry #7: Possession and Warranty",
      "The journey to creating your dream home is almost complete and we are almost ready to hand over your keys!",
      "As we discussed last time, we will have a thorough walk through of your home 2-3 weeks prior to your possession day going through all the outstanding items with you. These final weeks we will be conducting strict quality control finalizing all the elements in your home. From paint touch ups to cabinetry tweaks, we want to turn over a home that you (and we) can be proud of! A final furnace cleaning, window washing and through clean of your home will be completed ready for your possession day.",
      "In preparation for you moving in, we will prepare you for contacting all the service providers for your utilities.",
      "On your official possession day, we strongly suggest you keep the day free of any deliveries or moving trucks so that we can focus on teaching you all about your home. We will walk you through the mechanical room, show you all the ins and outs of your home and go through the Alberta New Home Warranty certificate of possession with you. We will finally hand you your keys and leave you to bask in all the planning and hard work that went into completing your home!",
      "Our warranty protection includes 1 year coverage on all the elements of your home (workmanship and material), 2-year coverage on any systems (delivery and distribution system), 5-year coverage on the building envelope and 10-year structural protection. Our excellent standing with Alberta New Home Warranty is a testament to the care and attention to detail we provide for our clients and their homes.",
      "We will do everything we can to turn over a deficiency free home, however if there are any back ordered items or details that need our trade partners to attend to, we will set up a trade day with you to have these items completed. We will equip you with our process for reporting warranty items and ensure that we rectify anything that needs attending to. When you buy an Aacropolis Home you can be assured that your home will be well cared for by us, as we want you to be proud of the workmanship in your home and enjoy hassle free warranty protection.",
      "We know you are going to be extremely proud of your Aacropolis Home and we value your praise. The majority of our business comes from our clients’ referrals. When you refer a purchaser to Aacropolis Homes you will receive a referral bonus of $3,000.00. The referral of your friends and family is the greatest compliment you could give us!",
    ],
    callout: "If you're looking for more information on the process of building an infill home, give Casey a call! 825.510.2298",
  },
  {
    slug: "follow-along-our-dream-home-build-infill-edition-journal-entry-6-the-construction-process",
    title: "Follow Along Our Dream Home Build: Infill Edition (Journal Entry #6) The Construction Process",
    date: "2024-05-16",
    updated: "2025-06-03",
    image: m("d3f19d510e0e45e8bdf93a79ec851ec4~mv2.jpg"),
    excerpt: "Journal Entry #6: The Construction Process. The waiting is finally over and we are ready to build your house!",
    body: [
      "Journal Entry #6: The Construction Process",
      "The waiting is finally over and we are ready to build your house!",
      "Let’s get the most commonly asked question out of the way: “When can we move in?”",
      "While this is going to be dependent on the size and scale of your home, it is typical that our homes will take anywhere between 9-12 months of construction from the time we excavate the foundation. Some of the variables are the square footage of your home, the details within your home and any delays due to weather.",
      "At Aacropolis Homes, we pride ourselves in creating a comprehensive schedule for the construction of your home, coordinating all of our trades and suppliers to be as time sensitive as possible. At the same time, we won’t sacrifice on quality and attention to detail in order to rush the build.",
      "Speaking of our Trades and Suppliers, we utilize partners in building your home based on their quality of workmanship, timelines and responsiveness to completing each scope of work as well as their commitment to warranty of their workmanship. Our partnerships are important to our reputation and we are stringent on ensuring we have the best companies working with us.",
      "A great resource which outlines each of the stages of construction is found on the CHBA website: https://www.chba.ca/the-construction-process/",
      "We will engage you throughout the Construction Process with several critical walk through’s during your build, to both show the workmanship and also to guide you through your selections process as outlined in our last Journal Entry (Interior Selections). We know it is exciting to see the progress and we will make sure you have plenty of opportunities to visit your home when it is clean and safe to do so! We never want you to feel like anything is hidden during the build process and also know that you will be excited to see each stage come together!",
      "We will keep you updated on the scheduling of your home along the way and we will estimate your possession date as we progress through your build. Your official date of possession letter will come at least 35 days in advance, this will be the firm date that your home will be completed.",
      "Around 2-3 weeks ahead of your possession date we will do a walk through of your home to identify items to be completed and address any outstanding deficiencies. The next few weeks will be dedicated to completing, cleaning and installing any appliances and final touches ahead of your move in day!",
      "We take a lot of pride in our homes and your experience matters a great deal to us! We will keep the lines of communication open throughout the construction process. We strive to make your dream home build as enjoyable and easy as possible! A strong process means that each stage can be fun rather than stressful. This is the reason the majority of our business comes from referrals.",
      "Next time we will outline what to prepare for your move in day, as well as detail the warranty and service program for your home.",
    ],
    callout: "If you're looking for more information on the process of building an infill home, give Casey a call! 825.510.2298",
  },
];
