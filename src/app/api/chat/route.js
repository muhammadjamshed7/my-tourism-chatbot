// // // // // src/app/api/chat/route.js
// // // // import { NextResponse } from "next/server";

// // // // const responses = {
// // // // 	greeting: "Thank you for reaching out to us! How can we assist you today?",
// // // // 	initialGreeting: "Thank you for reaching out to us!",
// // // // 	followUpGreeting: "How can we assist you today?",
// // // // 	info: "We provide services in Dubai, including tourism and more. Would you like to see our services, our tour guides, and our rates?",
// // // // 	rates: [
// // // // 		{
// // // // 			name: "Burj Khalifa",
// // // // 			rate: "100 AED",
// // // // 			image:
// // // // 				"https://img.static-kl.com/images/media/914D45E2-E702-4E73-9AABC7F603DB5614?w=960&aspect_ratio=2:1",
// // // // 		},
// // // // 		{
// // // // 			name: "Desert Safari",
// // // // 			rate: "200 AED",
// // // // 			image:
// // // // 				"https://img.static-kl.com/images/media/914D45E2-E702-4E73-9AABC7F603DB5614?w=960&aspect_ratio=2:1",
// // // // 		},
// // // // 		{
// // // // 			name: "Dubai Mall",
// // // // 			rate: "150 AED",
// // // // 			image:
// // // // 				"https://img.static-kl.com/images/media/914D45E2-E702-4E73-9AABC7F603DB5614?w=960&aspect_ratio=2:1",
// // // // 		},
// // // // 		{
// // // // 			name: "Palm Jumeirah",
// // // // 			rate: "250 AED",
// // // // 			image:
// // // // 				"https://img.static-kl.com/images/media/914D45E2-E702-4E73-9AABC7F603DB5614?w=960&aspect_ratio=2:1",
// // // // 		},
// // // // 		{
// // // // 			name: "Dubai Marina",
// // // // 			rate: "300 AED",
// // // // 			image:
// // // // 				"https://img.static-kl.com/images/media/914D45E2-E702-4E73-9AABC7F603DB5614?w=960&aspect_ratio=2:1",
// // // // 		},
// // // // 	],
// // // // 	poll: "Would you like to visit Burj Khalifa or another place in Dubai?",
// // // // 	discounts: [
// // // // 		{
// // // // 			name: "Burj Khalifa",
// // // // 			discount: "20% off",
// // // // 			image:
// // // // 				"https://media.tacdn.com/media/attractions-splice-spp-674x446/12/32/ad/2c.jpg",
// // // // 		},
// // // // 		{
// // // // 			name: "Desert Safari",
// // // // 			discount: "15% off",
// // // // 			image:
// // // // 				"https://media.tacdn.com/media/attractions-splice-spp-674x446/12/32/ad/2c.jpg",
// // // // 		},
// // // // 	],
// // // // 	vehicles:
// // // // 		"We offer services in these vehicles, which include free meals and other amenities at discounted rates.",
// // // // 	contact:
// // // // 		"WhatsApp number: 03029015909, Website: Aljanatourism, Facebook: Aljanan Agency",
// // // // 	call: "Would you like to call us directly? Click the button below to initiate a direct call.",
// // // // };

// // // // export async function POST(request) {
// // // // 	const { message } = await request.json();
// // // // 	let botResponse = "I'm not sure how to respond to that.";

// // // // 	if (/hello|hi/i.test(message)) {
// // // // 		botResponse = responses.initialGreeting;
// // // // 	} else if (/how can we assist/i.test(message)) {
// // // // 		botResponse = responses.followUpGreeting;
// // // // 	} else if (/information|info|services|travel|guidance/i.test(message)) {
// // // // 		botResponse = responses.info;
// // // // 	} else if (/yes/i.test(message)) {
// // // // 		botResponse = responses.rates.map((item) => ({
// // // // 			text: `${item.name}: ${item.rate}`,
// // // // 			image: item.image,
// // // // 		}));
// // // // 	} else if (/burj khalifa|another place/i.test(message)) {
// // // // 		botResponse = responses.poll;
// // // // 	} else if (/no|not interested/i.test(message)) {
// // // // 		botResponse = responses.discounts.map((item) => ({
// // // // 			text: `${item.name}: ${item.discount}`,
// // // // 			image: item.image,
// // // // 		}));
// // // // 	} else if (/vehicles|more info/i.test(message)) {
// // // // 		botResponse = responses.vehicles;
// // // // 	} else if (/contact|call/i.test(message)) {
// // // // 		botResponse = responses.contact;
// // // // 	}

// // // // 	return NextResponse.json({ reply: botResponse });
// // // // }

// // // import { NextResponse } from "next/server";

// // // const responses = {
// // // 	greeting: "Thank you for reaching out to us! How can we assist you today?",
// // // 	initialGreeting: "Thank you for reaching out to us!",
// // // 	followUpGreeting: "How can we assist you today?",
// // // 	info: "We provide services in Dubai, including tourism and more. Would you like to see our services, our tour guides, and our rates?",
// // // 	rates: [
// // // 		{
// // // 			name: "Burj Khalifa",
// // // 			rate: "100 AED",
// // // 			image:
// // // 				"https://img.static-kl.com/images/media/914D45E2-E702-4E73-9AABC7F603DB5614?w=960&aspect_ratio=2:1",
// // // 		},
// // // 		{
// // // 			name: "Desert Safari",
// // // 			rate: "200 AED",
// // // 			image:
// // // 				"https://img.static-kl.com/images/media/914D45E2-E702-4E73-9AABC7F603DB5614?w=960&aspect_ratio=2:1",
// // // 		},
// // // 		{
// // // 			name: "Dubai Mall",
// // // 			rate: "150 AED",
// // // 			image:
// // // 				"https://img.static-kl.com/images/media/914D45E2-E702-4E73-9AABC7F603DB5614?w=960&aspect_ratio=2:1",
// // // 		},
// // // 		{
// // // 			name: "Palm Jumeirah",
// // // 			rate: "250 AED",
// // // 			image:
// // // 				"https://img.static-kl.com/images/media/914D45E2-E702-4E73-9AABC7F603DB5614?w=960&aspect_ratio=2:1",
// // // 		},
// // // 		{
// // // 			name: "Dubai Marina",
// // // 			rate: "300 AED",
// // // 			image:
// // // 				"https://img.static-kl.com/images/media/914D45E2-E702-4E73-9AABC7F603DB5614?w=960&aspect_ratio=2:1",
// // // 		},
// // // 	],
// // // 	poll: "Would you like to visit Burj Khalifa or another place in Dubai?",
// // // 	discounts: [
// // // 		{
// // // 			name: "Burj Khalifa",
// // // 			discount: "20% off",
// // // 			image:
// // // 				"https://media.tacdn.com/media/attractions-splice-spp-674x446/12/32/ad/2c.jpg",
// // // 		},
// // // 		{
// // // 			name: "Desert Safari",
// // // 			discount: "15% off",
// // // 			image:
// // // 				"https://media.tacdn.com/media/attractions-splice-spp-674x446/12/32/ad/2c.jpg",
// // // 		},
// // // 	],
// // // 	vehicles:
// // // 		"We offer services in these vehicles, which include free meals and other amenities at discounted rates.",
// // // 	contact:
// // // 		"WhatsApp number: 03029015909, Website: Aljanatourism, Facebook: Aljanan Agency",
// // // 	call: "Would you like to call us directly? Click the button below to initiate a direct call.",
// // // };

// // // export async function POST(request) {
// // // 	const { message } = await request.json();
// // // 	let botResponse = "I'm not sure how to respond to that.";

// // // 	if (/hello|hi/i.test(message)) {
// // // 		botResponse = responses.initialGreeting;
// // // 	} else if (/how can we assist/i.test(message)) {
// // // 		botResponse = responses.followUpGreeting;
// // // 	} else if (/information|info|services|travel|guide|guidance/i.test(message)) {
// // // 		botResponse = responses.info;
// // // 	} else if (/yes/i.test(message)) {
// // // 		botResponse = responses.rates.map((item) => ({
// // // 			text: `${item.name}: ${item.rate}`,
// // // 			image: item.image,
// // // 		}));
// // // 	} else if (/burj khalifa|another place/i.test(message)) {
// // // 		botResponse = responses.poll;
// // // 	} else if (/no|not interested/i.test(message)) {
// // // 		botResponse = responses.discounts.map((item) => ({
// // // 			text: `${item.name}: ${item.discount}`,
// // // 			image: item.image,
// // // 		}));
// // // 	} else if (/vehicles|more info/i.test(message)) {
// // // 		botResponse = responses.vehicles;
// // // 	} else if (/contact|call/i.test(message)) {
// // // 		botResponse = responses.contact;
// // // 	}

// // // 	return NextResponse.json({ reply: botResponse });
// // // }
// // // src/app/api/chat/route.js
// // import { NextResponse } from "next/server";

// // const responses = {
// //   greeting: "Thank you for reaching out to us! How can we assist you today?",
// //   followUpGreeting: "How can we assist you today?",
// //   info: "We provide services in Dubai, including tourism and more. Would you like to see our services, our tour guides, and our rates?",
// //   rates: [
// //     {
// //       name: "Burj Khalifa",
// //       rate: "100 AED",
// //       image:
// //         "https://img.static-kl.com/images/media/914D45E2-E702-4E73-9AABC7F603DB5614?w=960&aspect_ratio=2:1",
// //     },
// //     {
// //       name: "Desert Safari",
// //       rate: "200 AED",
// //       image:
// //         "https://img.static-kl.com/images/media/914D45E2-E702-4E73-9AABC7F603DB5614?w=960&aspect_ratio=2:1",
// //     },
// //     {
// //       name: "Dubai Mall",
// //       rate: "150 AED",
// //       image:
// //         "https://img.static-kl.com/images/media/914D45E2-E702-4E73-9AABC7F603DB5614?w=960&aspect_ratio=2:1",
// //     },
// //     {
// //       name: "Palm Jumeirah",
// //       rate: "250 AED",
// //       image:
// //         "https://img.static-kl.com/images/media/914D45E2-E702-4E73-9AABC7F603DB5614?w=960&aspect_ratio=2:1",
// //     },
// //     {
// //       name: "Dubai Marina",
// //       rate: "300 AED",
// //       image:
// //         "https://img.static-kl.com/images/media/914D45E2-E702-4E73-9AABC7F603DB5614?w=960&aspect_ratio=2:1",
// //     },
// //   ],
// //   poll: "Would you like to visit Burj Khalifa or another place in Dubai?",
// //   discounts: [
// //     {
// //       name: "Burj Khalifa",
// //       discount: "20% off",
// //       image:
// //         "https://media.tacdn.com/media/attractions-splice-spp-674x446/12/32/ad/2c.jpg",
// //     },
// //     {
// //       name: "Desert Safari",
// //       discount: "15% off",
// //       image:
// //         "https://media.tacdn.com/media/attractions-splice-spp-674x446/12/32/ad/2c.jpg",
// //     },
// //   ],
// //   vehicles:
// //     "We offer services in these vehicles, which include free meals and other amenities at discounted rates.",
// //   hotels: {
// //     inquiry: "Would you like to book a hotel in Dubai?",
// //     options: [
// //       {
// //         name: "Hotel A",
// //         roomInfo: "Luxury suite with a view",
// //         image:
// //           "https://example.com/hotel-a.jpg",
// //       },
// //       {
// //         name: "Hotel B",
// //         roomInfo: "Family room with pool access",
// //         image:
// //           "https://example.com/hotel-b.jpg",
// //       },
// //     ],
// //   },
// //   contact:
// //     "Would you like to call us directly? Click the button below to initiate a direct call.",
// //   call: "Would you like to call us directly? Click the button below to initiate a direct call.",
// //   mealOptions:
// //     "Would you like to know about our dining options? We offer breakfast, lunch, and dinner.",
// //   diningOptions: {
// //     breakfast: "We have a variety of options for breakfast.",
// //     lunch: "Our lunch menu includes both local and international dishes.",
// //     dinner: "For dinner, you can enjoy a selection of gourmet meals.",
// //     header: "We offer a variety of dining options to suit your preferences.",

// // }

// // export async function POST(request) {
// //   const { message } = await request.json();
// //   let botResponse = "I'm not sure how to respond to that.";

// //   if (/hello|hi/i.test(message)) {
// //     botResponse = responses.greeting;
// //   } else if (/how can we assist/i.test(message)) {
// //     botResponse = responses.followUpGreeting;
// //   } else if (/information|info|services|travel|guidance/i.test(message)) {
// //     botResponse = responses.info;
// //   } else if (/yes/i.test(message)) {
// //     botResponse = responses.rates.map((item) => ({
// //       text: `${item.name}: ${item.rate}`,
// //       image: item.image,
// //     }));
// //   } else if (/burj khalifa|another place/i.test(message)) {
// //     botResponse = responses.poll;
// //   } else if (/no|not interested/i.test(message)) {
// //     botResponse = responses.discounts.map((item) => ({
// //       text: `${item.name}: ${item.discount}`,
// //       image: item.image,
// //     }));
// //   } else if (/vehicles|more info/i.test(message)) {
// //     botResponse = responses.vehicles;
// //   } else if (/hotels|accommodation/i.test(message)) {
// //     botResponse = responses.hotels.inquiry;
// //   } else if (/yes|book/i.test(message)) {
// //     botResponse = responses.hotels.options.map((hotel) => ({
// //       text: `${hotel.name}: ${hotel.roomInfo}`,
// //       image: hotel.image,
// //     }));
// //   } else if (/dining|food|meal/i.test(message)) {
// //     botResponse = responses.mealOptions;
// //   } else if (/breakfast/i.test(message)) {
// //     botResponse = responses.diningOptions.breakfast;
// //   } else if (/lunch/i.test(message)) {
// //     botResponse = responses.diningOptions.lunch;
// //   } else if (/dinner/i.test(message)) {
// //     botResponse = responses.diningOptions.dinner;
// //   } else if (/contact|call/i.test(message)) {
// //     botResponse = responses.call;
// //   }

// //   return NextResponse.json({ reply: botResponse });
// // }
// // chat.js
// import { NextResponse } from "next/server";
// // chat.js

// const responses = {
// 	greeting: "Thank you for reaching out to us! How can we assist you today?",
// 	followUpGreeting: "How can we assist you today?",
// 	followupmore: "Do you need further info?",
// 	info: "We provide services in Dubai, including tourism and more. Would you like to see our services, our tour guides, and our rates?",
// 	rates: [
// 		{
// 			name: "Burj Khalifa",
// 			rate: "100 AED",
// 			image:
// 				"https://img.static-kl.com/images/media/914D45E2-E702-4E73-9AABC7F603DB5614?w=960&aspect_ratio=2:1",
// 		},
// 		{
// 			name: "Desert Safari",
// 			rate: "200 AED",
// 			image:
// 				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN8Ma9_eWa5bkdallkgmGs1zdZsT64jbGLOw&s", // Replace with your actual image URL
// 		},
// 		{
// 			name: "Dubai Mall",
// 			rate: "150 AED",
// 			image:
// 				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWyYgPLiAMkmmVz1Ml5Gm_ui8YhAcRAGLuPQ&s", // Replace with your actual image URL
// 		},
// 		{
// 			name: "Palm Jumeirah",
// 			rate: "250 AED",
// 			image:
// 				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrAJe3dYzTMHcYF_SLgQawYHFL1LkyJiHvRg&s", // Replace with your actual image URL
// 		},
// 		{
// 			name: "Dubai Marina",
// 			rate: "300 AED",
// 			image:
// 				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ef6qhPaX_eStDD5Q9Lm_ucqhPIrWipBHJg&s", // Replace with your actual image URL
// 		},
// 	],
// 	poll: "Would you like to visit Burj Khalifa or another place in Dubai?",
// 	discounts: [
// 		{
// 			name: "Burj Khalifa",
// 			discount: "20% off",
// 			image:
// 				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjcaAS0tDN7WL3kJU5hL5DWqgTAeDXaxD9sw&s",
// 		},
// 		{
// 			name: "Desert Safari",
// 			discount: "15% off",
// 			image:
// 				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToNpoCFyF5rrW42zjJJjmfHTC-kHj6dgPBKw&s", // Replace with your actual image URL
// 		},
// 	],
// 	vehicles:
// 		"We offer services in these vehicles, which include free meals and other amenities at discounted rates.",
// 	contact:
// 		"Would you like to call us directly? Click the button below to initiate a direct call.",
// };

// export async function POST(request) {
// 	const { message } = await request.json();
// 	let botResponse = "I'm not sure how to respond to that.";

// 	if (/hello|hi/i.test(message)) {
// 		botResponse = responses.greeting;
// 	} else if (/how can we assist/i.test(message)) {
// 		botResponse = responses.followUpGreeting;
// 	} else if (/information|info|services|travel|guidance/i.test(message)) {
// 		botResponse = responses.info;
// 	} else if (/yes/i.test(message)) {
// 		botResponse = responses.rates.map((item) => ({
// 			text: `${item.name}: ${item.rate}`,
// 			image: item.image,
// 		}));
// 	} else if (/burj khalifa|another place/i.test(message)) {
// 		botResponse = responses.poll;
// 	} else if (/no|not interested/i.test(message)) {
// 		botResponse = responses.discounts.map((item) => ({
// 			text: `${item.name}: ${item.discount}`,
// 			image: item.image,
// 		}));
// 	} else if (/vehicles|more info/i.test(message)) {
// 		botResponse = responses.vehicles;
// 	} else if (/contact|call/i.test(message)) {
// 		botResponse = responses.contact;
// 	}

// 	return NextResponse.json({ reply: botResponse });
// }
// src/app/api/chat/route.js

// import { NextResponse } from "next/server";

// const responses = {
// 	greeting: "Thank you for reaching out to us! How can we assist you today?",
// 	followUpGreeting: "How can we assist you today?",
// 	followupmore: "Do you need further info?",
// 	info: "We provide services in Dubai, including tourism and more. Would you like to see our services, our tour guides, and our rates?",
// 	rates: [
// 		{
// 			name: "Burj Khalifa",
// 			rate: "100 AED",
// 			image:
// 				"https://img.static-kl.com/images/media/914D45E2-E702-4E73-9AABC7F603DB5614?w=960&aspect_ratio=2:1",
// 		},
// 		{
// 			name: "Desert Safari",
// 			rate: "200 AED",
// 			image:
// 				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN8Ma9_eWa5bkdallkgmGs1zdZsT64jbGLOw&s", // Replace with your actual image URL
// 		},
// 		{
// 			name: "Dubai Mall",
// 			rate: "150 AED",
// 			image:
// 				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWyYgPLiAMkmmVz1Ml5Gm_ui8YhAcRAGLuPQ&s", // Replace with your actual image URL
// 		},
// 		{
// 			name: "Palm Jumeirah",
// 			rate: "250 AED",
// 			image:
// 				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrAJe3dYzTMHcYF_SLgQawYHFL1LkyJiHvRg&s", // Replace with your actual image URL
// 		},
// 		{
// 			name: "Dubai Marina",
// 			rate: "300 AED",
// 			image:
// 				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ef6qhPaX_eStDD5Q9Lm_ucqhPIrWipBHJg&s", // Replace with your actual image URL
// 		},
// 	],
// 	poll: "Would you like to visit Burj Khalifa or another place in Dubai?",
// 	discounts: [
// 		{
// 			name: "Burj Khalifa",
// 			discount: "20% off",
// 			image:
// 				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjcaAS0tDN7WL3kJU5hL5DWqgTAeDXaxD9sw&s",
// 		},
// 		{
// 			name: "Desert Safari",
// 			discount: "15% off",
// 			image:
// 				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToNpoCFyF5rrW42zjJJjmfHTC-kHj6dgPBKw&s", // Replace with your actual image URL
// 		},
// 	],
// 	vehicles:
// 		"We offer services in these vehicles, which include free meals and other amenities at discounted rates.",
// 	hotels: {
// 		inquiry: "Would you like to book a hotel in Dubai?",
// 		options: [
// 			{
// 				name: "Hotel A",
// 				roomInfo: "Luxury suite with a view",
// 				image:
// 					"https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/article/stories/dubai/romantic-spa-treatments-for-couples/jumeirah-beach-hotel--talise-spa--couples-relaxaing-1.jpg?modified=20210211202803", // Replace with your actual image URL
// 			},
// 			{
// 				name: "Hotel B",
// 				roomInfo: "Family room with pool access",
// 				image:
// 					"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSorENg1_rl_LCEv7VEIxpfatvhmGXZzgYXPQ&s", // Replace with your actual image URL
// 			},
// 		],
// 	},
// 	contact:
// 		"Would you like to call us directly? Click the button below to initiate a direct call.",
// 	call: "Would you like to call us directly? Click the button below to initiate a direct call.",
// 	mealOptions:
// 		"Would you like to know about our dining options? We offer breakfast, lunch, and dinner.",
// 	diningOptions: {
// 		breakfast: "We have a variety of options for breakfast.",
// 		lunch: "Our lunch menu includes both local and international dishes.",
// 		dinner: "For dinner, you can enjoy a selection of gourmet meals.",
// 		header: "We offer a variety of dining options to suit your preferences.",
// 	},
// };

// export async function POST(request) {
// 	const { message } = await request.json();
// 	let botResponse = "I'm not sure how to respond to that.";

// 	if (/hello|hi/i.test(message)) {
// 		botResponse = responses.greeting;
// 	} else if (/how can we assist/i.test(message)) {
// 		botResponse = responses.followUpGreeting;
// 	} else if (/info|services|travel|guidance/i.test(message)) {
// 		botResponse = responses.info;
// 	} else if (/more info/i.test(message)) {
// 		botResponse = responses.followupmore;
// 	} else if (/yes/i.test(message)) {
// 		botResponse = responses.rates.map((item) => ({
// 			text: `${item.name}: ${item.rate}`,
// 			image: item.image,
// 		}));
// 	} else if (/burj khalifa|another place/i.test(message)) {
// 		botResponse = responses.poll;
// 	} else if (/no|not interested/i.test(message)) {
// 		botResponse = responses.discounts.map((item) => ({
// 			text: `${item.name}: ${item.discount}`,
// 			image: item.image,
// 		}));
// 	} else if (/vehicles|more info/i.test(message)) {
// 		botResponse = responses.vehicles;
// 	} else if (/hotels|accommodation/i.test(message)) {
// 		botResponse = responses.hotels.inquiry;
// 	} else if (/yes|book/i.test(message)) {
// 		botResponse = responses.hotels.options.map((hotel) => ({
// 			text: `${hotel.name}: ${hotel.roomInfo}`,
// 			image: hotel.image,
// 		}));
// 	} else if (/dining|food|meal/i.test(message)) {
// 		botResponse = responses.mealOptions;
// 	} else if (/breakfast/i.test(message)) {
// 		botResponse = responses.diningOptions.breakfast;
// 	} else if (/lunch/i.test(message)) {
// 		botResponse = responses.diningOptions.lunch;
// 	} else if (/dinner/i.test(message)) {
// 		botResponse = responses.diningOptions.dinner;
// 	} else if (/contact|call/i.test(message)) {
// 		botResponse = responses.call;
// 	}

// 	return NextResponse.json({ reply: botResponse });
// }

//

import { NextResponse } from "next/server";

const responses = {
	greeting: "Thank you for reaching out to us! How can we assist you today?",
	followUpGreeting: "How can we assist you today?",
	followupmore: "Do you need further info?",
	info: "We provide services in Dubai, including tourism and more. Would you like to see our services, our tour guides, and our rates?",
	rates: [
		{
			name: "Burj Khalifa",
			rate: "100 AED",
			image:
				"https://img.static-kl.com/images/media/914D45E2-E702-4E73-9AABC7F603DB5614?w=960&aspect_ratio=2:1",
		},
		{
			name: "Desert Safari",
			rate: "200 AED",
			image:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN8Ma9_eWa5bkdallkgmGs1zdZsT64jbGLOw&s",
		},
		{
			name: "Dubai Mall",
			rate: "150 AED",
			image:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWyYgPLiAMkmmVz1Ml5Gm_ui8YhAcRAGLuPQ&s",
		},
		{
			name: "Palm Jumeirah",
			rate: "250 AED",
			image:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrAJe3dYzTMHcYF_SLgQawYHFL1LkyJiHvRg&s",
		},
		{
			name: "Dubai Marina",
			rate: "300 AED",
			image:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ef6qhPaX_eStDD5Q9Lm_ucqhPIrWipBHJg&s",
		},
	],
	poll: "Would you like to visit Burj Khalifa or another place in Dubai?",
	discounts: [
		{
			name: "Burj Khalifa",
			discount: "20% off",
			image:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjcaAS0tDN7WL3kJU5hL5DWqgTAeDXaxD9sw&s",
		},
		{
			name: "Desert Safari",
			discount: "15% off",
			image:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToNpoCFyF5rrW42zjJJjmfHTC-kHj6dgPBKw&s",
		},
	],
	vehicles:
		"We offer services in these vehicles, which include free meals and other amenities at discounted rates.",
	hotels: {
		inquiry: "Would you like to book a hotel in Dubai?",
		options: [
			{
				name: "Hotel A",
				roomInfo: "Luxury suite with a view",
				image:
					"https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/article/stories/dubai/romantic-spa-treatments-for-couples/jumeirah-beach-hotel--talise-spa--couples-relaxaing-1.jpg?modified=20210211202803",
			},
			{
				name: "Hotel B",
				roomInfo: "Family room with pool access",
				image:
					"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSorENg1_rl_LCEv7VEIxpfatvhmGXZzgYXPQ&s",
			},
		],
	},
	contact:
		"Would you like to call us directly? Click the button below to initiate a direct call.",
	call: "Would you like to call us directly? Click the button below to initiate a direct call.",
	mealOptions:
		"Would you like to know about our dining options? We offer breakfast, lunch, and dinner.",
	diningOptions: {
		breakfast: {
			text: "We have a variety of options for breakfast.",
			image: "https://unsplash.com/photos/your-breakfast-image",
			price: "10 AED", // Replace with actual price
		},
		lunch: {
			text: "Our lunch menu includes both local and international dishes.",
			image: "https://unsplash.com/photos/your-lunch-image",
			price: "15 AED", // Replace with actual price
		},
		dinner: {
			text: "For dinner, you can enjoy a selection of gourmet meals.",
			image: "https://unsplash.com/photos/your-dinner-image",
			price: "20 AED", // Replace with actual price
		},
		header: "We offer a variety of dining options to suit your preferences.",
	},
};

export async function POST(request) {
	const { message } = await request.json();
	let botResponse = "I'm not sure how to respond to that.";

	if (/hello|hi/i.test(message)) {
		botResponse = responses.greeting;
	} else if (/how can we assist/i.test(message)) {
		botResponse = responses.followUpGreeting;
	} else if (/info|services|travel|guidance/i.test(message)) {
		botResponse = responses.info;
	} else if (/more info/i.test(message)) {
		botResponse = responses.followupmore;
	} else if (/yes/i.test(message)) {
		botResponse = responses.rates.map((item) => ({
			text: `${item.name}: ${item.rate}`,
			image: item.image,
		}));
	} else if (/burj khalifa|another place/i.test(message)) {
		botResponse = responses.poll;
	} else if (/no|not interested/i.test(message)) {
		botResponse = responses.discounts.map((item) => ({
			text: `${item.name}: ${item.discount}`,
			image: item.image,
		}));
	} else if (/vehicles|more info/i.test(message)) {
		botResponse = responses.vehicles;
	} else if (/hotels|accommodation/i.test(message)) {
		botResponse = responses.hotels.inquiry;
	} else if (/|book/i.test(message)) {
		botResponse = responses.hotels.options.map((hotel) => ({
			text: `${hotel.name}: ${hotel.roomInfo}`,
			image: hotel.image,
		}));
	} else if (/dining|food|meal/i.test(message)) {
		botResponse = {
			type: "radio",
			options: [
				{ text: "Breakfast", value: "breakfast" },
				{ text: "Lunch", value: "lunch" },
				{ text: "Dinner", value: "dinner" },
			],
		};
	} else if (/breakfast/i.test(message)) {
		botResponse = responses.diningOptions.breakfast;
	} else if (/lunch/i.test(message)) {
		botResponse = responses.diningOptions.lunch;
	} else if (/dinner/i.test(message)) {
		botResponse = responses.diningOptions.dinner;
	} else if (/contact|call/i.test(message)) {
		botResponse = responses.call;
	} else if (/confirm|order/i.test(message)) {
		botResponse = "Please call us at +923029015909 to confirm your order.";
	}

	return NextResponse.json({ reply: botResponse });
}
