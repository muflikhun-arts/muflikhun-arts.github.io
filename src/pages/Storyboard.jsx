import { memo } from 'react';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { storyboards } from '../data/storyboard';

import VideoCard from '../components/VideoCard';
import ImageCard from '../components/imageCard';

import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const widthImage = window.innerWidth > window.innerHeight ? 'calc(100vw - 600px)' : 'calc(100vw - 16px)';
const widthVideo = window.innerWidth > window.innerHeight ? 'calc(100vw - 600px)' : 'calc(100vw - 8px)';

const Storyboard = () => {
	return (
		<div className="w-full flex flex-col items-center py-8">
			{storyboards.map((storyboard) => {
				const { 
					title,
					path, 					
					titleColor, 
					videoPath, 
					images 
				} = storyboard;
				return (
					<div key={title} className="bg-white w-full md:w-5/6 flex flex-col items-center shadow md:rounded-lg my-4 px-2 pb-8 md:my-8 md:px-6 md:pb-24">
						<div className="py-6 md:py-12">
							<h1 className={`text-3xl font-bold ${titleColor}`}>{title}</h1>
						</div>

						{videoPath && (
							<div className="relative pb-16 md:pb-24">
								<VideoCard
									src={videoPath}
									controls
									style={{ 
										width: widthVideo || 'auto',
										height: '100%'
									}}
								/>
							</div>
						)}

						<div className="relative">
							<Swiper
								lazy={true}
								style={{
									'--swiper-navigation-color': '#84cc16',
									width: widthImage || 'auto',
									height: '100%',
								}}
								loop={true}
								spaceBetween={5}
								navigation={true}
								pagination={{ clickable: true }}
								// thumbs={{ swiper: thumbsSwiper }}
								modules={[FreeMode, Navigation, Thumbs]}
								className="select-none"
							>
								{images.map((x) => (
									<SwiperSlide key={String(x)}>
										<ImageCard src={`${path}${x + 1}.jpg`} style={{
											width: widthImage || 'auto',
											height: '100%',
										}} />
									</SwiperSlide>
								))}
							</Swiper>

							{/* <Swiper
								onSwiper={setThumbsSwiper}
								spaceBetween={5}
								slidesPerView={4}
								freeMode={true}
								watchSlidesProgress={true}
								modules={[FreeMode, Navigation, Thumbs]}
								className="myThumbnail"
							>
								{personalDanceImages.map((x) => (
									<SwiperSlide key={String(x)}>
										<ImageCard imagePath={`${personalDirPath}${x + 1}.jpg`} />
									</SwiperSlide>
								))}
							</Swiper> */}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default memo(Storyboard);
