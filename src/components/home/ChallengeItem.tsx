import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import ChallengeThumbnail from './ChallengeThumbnail';

export default function ChallengeItem({ style }: { style: any }) {
	return (
		<Container style={style}>
			<ChallengeInfo>
				<ChallengeThumbnail />
				<View
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-around',
						paddingTop: '4px',
						paddingBottom: '4px',
					}}
				>
					<ChallengeTitle>매일 플래너 쓰기</ChallengeTitle>
					<ChallengeDescription>참여인원 ∙ 4명</ChallengeDescription>
					<ChallengeCreatedAt>개설일 ∙ 2023/03/02</ChallengeCreatedAt>
				</View>
			</ChallengeInfo>
			<View>
				<View
					style={{
						fontSize: '15px',
						color: '#929292',
						marginBottom: '4px',
						marginTop: '10px',
					}}
				>
					나의 인증률
				</View>
				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
						height: '24px',
					}}
				>
					<Text
						style={{
							fontSize: '22px',
						}}
					>
						75%
					</Text>
					<ProgressBar>
						<View
							style={{
								width: '75%',
								height: '100%',
								backgroundColor: '#80F988',
								borderRadius: '10px',
							}}
						/>
					</ProgressBar>
				</View>
			</View>
			<Text
				style={{
					fontSize: '15px',
					color: '#929292',
					marginTop: '10px',
					marginBottom: '4px',
				}}
			>
				최근 업데이트
			</Text>
			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
				}}
			>
				<ChallengeThumbnail size={46} />
				<ChallengeThumbnail size={46} />
				<ChallengeThumbnail size={46} />
			</View>
		</Container>
	);
}

const Container = styled.View`
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 20px;
	border-radius: 10px;
	background-color: white;
`;

const ChallengeInfo = styled.View`
	display: flex;
	flex-direction: row;
`;

const ChallengeTitle = styled.Text`
	font-size: 20px;
	font-weight: 500;
`;

const ChallengeDescription = styled.Text`
	font-size: 15px;
	font-weight: 500;
	color: #929292;
`;

const ChallengeCreatedAt = styled.Text`
	font-size: 15px;
	font-weight: 500;
	color: #929292;
`;

const ProgressBar = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 80%;
	height: 16px;
	background-color: #f7f6f8;
	border-radius: 10px;
`;