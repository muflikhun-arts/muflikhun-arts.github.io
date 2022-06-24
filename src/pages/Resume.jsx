import { memo } from 'react';
import Icon from '../components/Icon';
import contacts from '../data/contactData';
import softwares from '../data/softwaresData';
import experiences from '../data/experienceData';

const Resume = () => {
	return (
		<div className="w-full">
			<div className="h-screen flex items-center">
				<div className="w-full flex flex-col items-center gap-y-10 md:p-20">
					<h1 className="text-4xl font-light">
						Hi, I`m <b className="text-4xl font-bold">Muflikhun</b>{' '}
						<span className="text-4xl font-normal text-gray-400">( Male )</span>
					</h1>
					<h3 className="text-4xl text-center md:text-left font-bold text-multicolor">
						Storyboard Artist & 2D Animator
					</h3>
					<div className="my-40 flex-1 flex flex-row justify-center items-center gap-8">
						{contacts.map(
							({ label, link, newTab, icon, prefix, textColor }) => (
								<div
									key={label}
									className=" cursor-pointer px-2 py-1 flex items-center"
								>
									<Icon
										name={icon}
										prefix={prefix}
										size="2x"
										className={`${textColor} pr-1`}
									/>{' '}
									<a
										href={link}
										target={newTab ? '_blank' : ''}
										rel="noopener noreferrer"
										className="pr-2 cursor-pointer no-underline font-bold"
									>
										{label}
									</a>
								</div>
							)
						)}
					</div>
				</div>
			</div>

			<div
				className="bg-profile-100 flex flex-col justify-center items-center md:px-2 md:px-20"
			>				
				<div className="my-5">
					<h1 className="px-4 text-gray-700 py-2 text-2xl border-b-2 border-yellow-500">
						Software Used
					</h1>
				</div>
				<div className="w-10/12 md:w-5/6 mx-auto my-5 flex flex-col md:flex-row justify-evenly">
					{softwares.map(({ image, imageClass, label, hoverBg, hoverBorder, description }) => (
						<div
							key={label}
							className={`flex flex-col flex-1 justify-center items-center m-4 px-6 py-4 bg-white border border-gray-200 ${hoverBorder} hover:text-white ${hoverBg} hover:shadow-lg rounded-lg transition-all duration-300`}
						>
							<div className="mt-4 mb-2">
								<img src={require(`../images/${image}`)} alt="label" className={imageClass} />
							</div>
							<label className="mb-2 text-lg font-bold">{label}</label>
							<section className="text-center text-base">{description}</section>
						</div>
					))}
				</div>
			</div>

			<div className="flex flex-col justify-center items-center px-2 md:px-20 py-4">
				<div className="w-full flex flex-col justify-center items-center px-2 md:px-20">
					<div className="my-5">
						<h1 className="px-4 text-gray-700 text-2xl border-b-2 border-green-500">
							Experiences
						</h1>
					</div>
				</div>
				<div className="relative w-full md:w-2/3 m-8">
					<div
						className="border-r-2 border-green-500 absolute h-full top-0"
						style={{ left: 14 }}
					/>
					<ul className="list-none m-0 p-0">
						{experiences.map(({ company, textColor, sub, jobdesk }, i) => (
							<li key={sub} className="mb-4">
								<div className="flex items-center mb-1">
									<div
										className={`${
											i + 1 === experiences.length
												? 'bg-green-500'
												: 'bg-gray-100 border-8 border-green-500'
										} rounded-full h-8 w-8 z-10`}
									/>
									<div className="flex flex-1 flex-col ml-4 font-medium justify-center items-start">
										<span className={`${textColor} text-lg`}>{company}</span>
										<span className="text-base">{sub}</span>
									</div>
								</div>
								<div className="ml-12">
									<ul className="list-disc list-inside">
										{jobdesk.map((job) => (
											<li key={job} className="text-base">
												{job}
											</li>
										))}
									</ul>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default memo(Resume);
