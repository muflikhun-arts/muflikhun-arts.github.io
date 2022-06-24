import React, { useState, memo, useCallback } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Icon from './Icon';
import sections from '../data/sectionData';

const NavButton = memo(
	({
		isSection,
		icon,
		label,
		textColor,
		borderColor,
		hoverTextColor,
		hoverBorderColor,
		onClick,
	}) => (
		<button
			onClick={onClick}
			className={`w-full md:w-auto p-4 md:py-1 cursor-pointer text-sm text-right md:text-center font-bold uppercase border-b-2 
					${
						isSection
							? `${textColor} ${borderColor}`
							: `text-gray-500 border-transparent ${hoverBorderColor} ${hoverTextColor} transition-all duration-200`
					}
				`}
		>
			<Icon name={icon} size="lg" /> {label}
		</button>
	)
);

const Nav = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [showNav, setNav] = useState(false);

	const gotoSection = useCallback(
		(link) => () => {
			navigate(link);
		},
		[navigate]
	);

	return (
		<div className="w-full bg-white flex h-24 px-8 md:px-20 justify-between items-center border-b border-gray-200">
			<div className="whitespace-no-wrap font-bold text-sm md:text-base" />
			<button
				onClick={() => setNav((old) => !old)}
				onBlur={() => setTimeout(() => setNav(false), 200)}
				className="block md:hidden"
			>
				<Icon name="bars" size="lg" />
			</button>
			<div
				className={`${
					!showNav && 'hidden'
				} absolute bg-white w-full top-0 left-0 mt-16 md:mt-0 md:left-auto md:relative z-50 border-b border-gray-300`}
			>
				<div className="flex flex-col justify-end items-end gap-x-14 z-50">
					{sections.map((nav, i) => (
						<NavButton
							key={nav.label}
							isSection={nav.link === location.pathname}
							onClick={gotoSection(nav.link)}
							{...nav}
						/>
					))}
					<Link
						to="/files/Muflikhun.pdf"
						target="_blank"
						download
						className="w-full no-underline p-4 cursor-pointer text-sm text-right font-bold text-multicolor"
					>
						<Icon name="file-download" size="lg" /> My VC
					</Link>
				</div>
			</div>
			<div className="hidden flex-1 md:flex top-0 left-0 mt-16 md:mt-0 md:left-auto md:relative z-50">
				<div className="w-full flex flex-row justify-end items-center gap-14 z-50">
					{sections.map((nav) => (
						<NavButton
							key={nav.label}
							isSection={nav.link === location.pathname}
							onClick={gotoSection(nav.link)}
							{...nav}
						/>
					))}
					<Link
						to="/files/Muflikhun.pdf"
						target="_blank"
						download
						className="no-underline p-4 cursor-pointer text-sm text-right font-bold text-multicolor"
					>
						<Icon name="file-download" size="lg" /> My VC
					</Link>
				</div>
			</div>
		</div>
	);
};

export default memo(Nav);
