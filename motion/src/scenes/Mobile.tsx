import { Brand } from "../brand";
import { Eyebrow } from "../frames/Eyebrow";
import { Fade } from "../frames/Fade";
import { Phone } from "../frames/Phone";
import { Rise } from "../frames/Rise";
import { Scroll } from "../frames/Scroll";
import type { Capture } from "../manifest";

const HEIGHT = 900;

export function Mobile({ capture }: { capture: Capture }) {
  const width = Math.round((HEIGHT * 390) / 844);

  return (
    <Fade>
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 160 }}>
        <Rise style={{ maxWidth: 760 }}>
          <Eyebrow>Responsive</Eyebrow>
          <div style={{ fontFamily: Brand.serif, fontStyle: "italic", fontWeight: 300, fontSize: 104, lineHeight: 1.05, marginTop: 24 }}>
            Pensé pour le mobile, soigné sur desktop.
          </div>
        </Rise>
        <Rise delay={8} distance={120}>
          <Phone width={width} height={HEIGHT}>
            <Scroll capture={capture} width={width} height={HEIGHT} delay={20} />
          </Phone>
        </Rise>
      </div>
    </Fade>
  );
}
