import { Text, HeadingContainer, HeadingWrap, HeadingSection } from './styles';

export default function Heading({ firstLine, secondLine, matrix2, matrix1 }) {
  return (
    <HeadingSection>
      <HeadingContainer $matrix1={matrix1} $matrix2={matrix2}>
        <HeadingWrap>
          <Text>{firstLine}</Text>
        </HeadingWrap>

        {secondLine && (
          <HeadingWrap>
            <Text>{secondLine}</Text>
          </HeadingWrap>
        )}
      </HeadingContainer>
    </HeadingSection>
  );
}
