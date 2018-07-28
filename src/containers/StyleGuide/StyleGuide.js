import React from "react";

import { Container } from "../../shared";
import { BreakpointDown, BreakpointOnly, BreakpointUp } from "./Breakpoints";

const StyleGuide = () => {
  return (
    <Container>
      <h1>Guía de estilos</h1>
      <BreakpointUp>
        <strong>Up</strong>
        <span className="xs">XS</span>
        <span className="sm">SM</span>
        <span className="md">MD</span>
        <span className="lg">LG</span>
        <span className="xl">XL</span>
      </BreakpointUp>
      <BreakpointDown>
        <strong>Down</strong>
        <span className="xs">XS</span>
        <span className="sm">SM</span>
        <span className="md">MD</span>
        <span className="lg">LG</span>
        <span className="xl">XL</span>
      </BreakpointDown>

      <BreakpointOnly>
        <strong>Only</strong>
        <span className="xs">XS</span>
        <span className="sm">SM</span>
        <span className="md">MD</span>
        <span className="lg">LG</span>
        <span className="xl">XL</span>
      </BreakpointOnly>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel libero
        quis quam tempor placerat. Sed id quam nec orci iaculis sagittis. Fusce
        dapibus ipsum ut tristique interdum. Nam aliquam, neque eu imperdiet
        laoreet, velit lectus auctor orci, et viverra nulla purus id tellus.
        Proin ullamcorper dui eu mi fringilla rhoncus. Nulla velit metus,
        elementum vitae nunc vitae, pulvinar iaculis tellus. Phasellus elementum
        ornare nisl dignissim efficitur. Fusce eget orci nunc. Nullam molestie
        ac magna blandit ornare. Sed magna nisi, pellentesque at orci non,
        posuere tempus nulla. Maecenas ut dapibus nisi. Morbi euismod ligula a
        erat dapibus dapibus. Sed luctus massa quis lorem eleifend condimentum.
        Mauris nunc elit, porttitor semper ex non, sodales maximus odio.
        Phasellus eleifend pulvinar ipsum, ac malesuada erat porttitor ut. Donec
        in auctor nisl.
      </p>
      <p>
        Praesent bibendum erat id lectus dapibus, a fringilla tellus
        scelerisque. Sed id luctus tortor. Sed scelerisque finibus sem, a
        finibus ipsum hendrerit nec. Curabitur placerat vestibulum ligula eget
        laoreet. Aenean posuere, enim sit amet egestas molestie, eros risus
        hendrerit velit, quis maximus quam nisl nec odio. Suspendisse tempus
        enim sit amet leo iaculis, nec blandit urna vehicula. Praesent pharetra
        pulvinar cursus. Vestibulum in magna risus. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        Suspendisse gravida orci nec suscipit eleifend. Cras sollicitudin libero
        risus, nec varius metus rutrum vel.
      </p>
      <p>
        Phasellus eu libero mollis, pharetra ante non, fermentum metus. Nam
        pretium est a vulputate convallis. Vestibulum sit amet leo tortor.
        Quisque vel augue aliquet lectus pretium pharetra vitae ut quam. Nunc
        elementum eleifend magna, sit amet fringilla ipsum rutrum ut.
        Pellentesque ullamcorper laoreet dolor, at elementum eros sagittis ut.
        Aenean id feugiat erat. Sed sit amet dui non quam semper luctus ac in
        diam. Mauris tempor vel mauris nec dapibus. Suspendisse lobortis, augue
        nec euismod aliquet, massa turpis dapibus diam, non suscipit lectus
        sapien ornare nisl. Maecenas convallis mi eu eros cursus eleifend. Sed
        et imperdiet sapien. In ultricies ante in mauris aliquam mollis.
      </p>
      <p>
        Suspendisse elementum aliquet mattis. Proin in eros nec turpis pretium
        venenatis. Maecenas metus lectus, tristique id mi quis, varius luctus
        leo. Pellentesque dapibus vulputate neque, eu feugiat quam bibendum sit
        amet. Quisque elementum sem a justo facilisis rhoncus. Fusce porttitor
        commodo nulla id euismod. Ut interdum viverra mauris ac eleifend. Nullam
        congue non dolor a vulputate. In at rhoncus tellus, non dapibus ligula.
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus.
      </p>
      <p>
        Fusce varius dapibus massa blandit blandit. Suspendisse rhoncus augue eu
        justo tincidunt, at eleifend justo pretium. Interdum et malesuada fames
        ac ante ipsum primis in faucibus. Maecenas egestas erat a vehicula
        pharetra. Integer et dui eget diam pulvinar sollicitudin. Nulla
        porttitor nunc eu viverra iaculis. Nam mattis augue sit amet molestie
        laoreet. Cras vulputate nunc sed rhoncus ultrices. In sed elit non leo
        accumsan faucibus eu sit amet ex. Aliquam nec aliquam ipsum. Nullam ut
        velit quis lorem tempor euismod nec nec diam. Donec elementum neque
        vitae lorem ultricies, vel aliquet velit eleifend. Phasellus luctus
        tortor at elit ultrices cursus.
      </p>
      <p>
        Vestibulum ultricies justo mauris, id sollicitudin orci egestas sed.
        Duis dui leo, gravida id euismod et, egestas auctor sapien. Suspendisse
        malesuada magna arcu, id suscipit dui dignissim sit amet. Maecenas
        ultrices arcu at elementum varius. Nam tincidunt purus fringilla ex
        convallis iaculis. Ut lobortis ullamcorper lectus, quis posuere massa
        luctus eu. Aenean ultrices dolor in sapien semper iaculis. Ut at arcu eu
        arcu volutpat tristique. Mauris ut nibh consectetur, commodo sapien id,
        suscipit tellus. Suspendisse potenti. Quisque enim metus, dictum ut ex
        vel, semper laoreet arcu. Maecenas elementum faucibus metus non viverra.
        Fusce fringilla enim ac augue convallis efficitur. Suspendisse iaculis
        urna sit amet turpis varius, at tincidunt justo aliquam. Nam fermentum
        mauris justo, non tincidunt mauris pulvinar feugiat.
      </p>
      <p>
        Morbi suscipit malesuada nisi, eu facilisis turpis dignissim eget.
        Integer blandit eleifend suscipit. Nunc luctus felis non risus elementum
        porttitor. Donec vulputate condimentum aliquam. Praesent magna neque,
        rutrum eu porttitor et, eleifend sed enim. Donec vitae nulla sit amet
        urna aliquam rutrum ut et velit. Suspendisse potenti. Nam quis eros
        placerat, fermentum ex sit amet, maximus mauris. Vestibulum interdum
        bibendum nunc, quis rhoncus odio. Etiam a vestibulum tellus. Mauris
        vitae mollis velit. Aliquam lobortis vulputate viverra. Vivamus bibendum
        magna diam, id aliquam est blandit vitae. Nunc eget pharetra magna. Nunc
        lobortis consectetur risus quis rhoncus.
      </p>
      <p>
        Aliquam imperdiet mattis dui a dignissim. Curabitur ac diam auctor,
        eleifend justo quis, interdum orci. Fusce placerat tellus vel ex aliquet
        vestibulum. Donec ut ligula libero. Vivamus rhoncus faucibus imperdiet.
        Maecenas a nunc quis nisl semper accumsan vel et lacus. Proin sit amet
        nunc scelerisque, rhoncus leo non, pretium ante. Duis maximus nisl sed
        hendrerit dignissim. Duis eu eros at erat efficitur tincidunt porttitor
        in nulla. Nulla vitae ipsum ligula. Etiam rhoncus quis est at elementum.
        Donec quis efficitur turpis. Nulla varius arcu sit amet massa viverra,
        sit amet posuere mauris condimentum. Suspendisse ut pretium arcu. Proin
        lacinia nec dolor ac aliquam. Vestibulum interdum molestie pretium.
      </p>
      <p>
        Nullam sagittis elit ullamcorper ligula cursus rhoncus. Nunc ullamcorper
        laoreet lorem. Suspendisse potenti. Maecenas ullamcorper, quam nec
        aliquet fermentum, magna enim euismod lectus, vel faucibus magna ipsum
        eu nisi. Nulla at dui at lacus feugiat eleifend. Aenean ornare ex et
        nisi ullamcorper eleifend. Vivamus ut pulvinar leo. Cras pellentesque
        lacus id eros consequat venenatis. Praesent id eros eget lectus accumsan
        convallis consequat sit amet ex. Aenean bibendum nulla sit amet luctus
        lobortis. Phasellus porttitor sed nisl sit amet tristique. Donec ut
        egestas orci. Fusce eget fermentum lorem. Aliquam sit amet fermentum
        magna. Pellentesque leo enim, bibendum in semper eu, finibus lacinia
        ligula.
      </p>
      <p>
        Nullam tempus sit amet orci sed bibendum. Sed a dolor orci. Sed nec sem
        dictum, pretium orci id, sollicitudin magna. Proin ultricies est vitae
        elit pellentesque, in pharetra risus scelerisque. Nam pellentesque
        malesuada diam ac pretium. Aenean fringilla lorem sed condimentum
        interdum. Vestibulum suscipit, lectus vel laoreet scelerisque, nisl nisi
        pellentesque nunc, at elementum tortor mauris convallis dolor. Fusce ut
        ante posuere leo suscipit aliquam. Sed ac magna vel eros eleifend
        consectetur. Proin sapien lectus, viverra sit amet interdum ac,
        condimentum et enim. Quisque laoreet lectus felis, a pellentesque augue
        sagittis eu. Nulla et scelerisque nunc, quis semper neque. Ut ex lectus,
        tincidunt eu turpis a, mollis maximus nisl. Etiam ut placerat dolor.
      </p>
      <p>
        Fusce efficitur mollis sem et rutrum. Donec eget volutpat ex. Vivamus
        vel dui elit. Proin in velit et turpis ornare euismod. Praesent a mattis
        quam. Aenean egestas luctus massa non luctus. Maecenas in massa
        accumsan, venenatis lectus tristique, faucibus quam. Donec dictum magna
        et efficitur placerat. Class aptent taciti sociosqu ad litora torquent
        per conubia nostra, per inceptos himenaeos. Morbi felis sapien, egestas
        pellentesque magna vitae, pellentesque tincidunt magna. Nulla eu
        pulvinar diam. Mauris et libero et lectus finibus pulvinar. Vestibulum
        finibus, urna at volutpat consectetur, lorem metus gravida libero, ut
        tincidunt nunc arcu sit amet erat.
      </p>
      <p>
        Etiam tincidunt non lorem non egestas. Etiam massa massa, molestie vitae
        ornare non, tincidunt non libero. Nullam sit amet finibus ex. Etiam eget
        euismod purus. Phasellus lobortis dui sed elit pulvinar maximus.
        Suspendisse convallis, nulla sodales laoreet imperdiet, leo tortor
        interdum est, a aliquam ligula ante vitae lacus. Nam viverra maximus
        nisl eget auctor.
      </p>
      <p>
        Nam blandit vel nisl sit amet elementum. Sed ultricies placerat turpis,
        ac luctus est euismod in. Proin a lectus rhoncus, viverra neque id,
        semper est. Fusce in faucibus mi. Proin ut metus eget diam dictum
        pretium at ac nulla. Donec a ligula eget tortor facilisis euismod.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Pellentesque facilisis mauris id dolor mattis
        sagittis. Pellentesque fringilla tellus nec elit accumsan, sit amet
        efficitur ante vestibulum. Etiam porta, tortor nec molestie pulvinar,
        justo nunc mollis metus, quis aliquam ipsum tortor id est. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Nullam odio elit, semper et luctus vitae, congue non libero. Mauris
        scelerisque mi et lorem commodo pulvinar. Suspendisse potenti. Donec
        lobortis posuere nulla hendrerit efficitur. Aenean euismod mi dolor, ut
        pretium lectus pretium quis.
      </p>
      <p>
        Aliquam purus purus, euismod in aliquet et, fermentum eget felis. Nullam
        laoreet leo id tristique ornare. Duis ac tincidunt sapien. Donec purus
        enim, pulvinar non nunc ut, gravida vehicula turpis. Nam est eros,
        semper et rutrum varius, tempor ut tellus. Praesent quis tincidunt eros.
        Donec mollis, est ac suscipit tempor, elit nibh gravida libero, a
        tincidunt nulla ligula a magna. Ut ultrices, dolor ac egestas iaculis,
        diam nisi lobortis mi, et accumsan erat erat aliquet velit. Nullam
        cursus pretium risus, sit amet ullamcorper lectus pulvinar sagittis.
        Praesent sollicitudin mauris fermentum quam placerat hendrerit.
      </p>
      <p>
        Phasellus aliquam orci eget rhoncus bibendum. Sed pulvinar magna vel
        tellus dictum, in ullamcorper lectus dignissim. Nam porta mollis massa
        nec sagittis. Mauris pharetra ante diam. Phasellus dolor diam, hendrerit
        sollicitudin urna quis, imperdiet interdum nibh. Curabitur quis est vel
        turpis aliquam accumsan. Aliquam justo enim, dictum eu elementum a,
        commodo eu elit. Nunc rhoncus finibus mi, quis egestas dui venenatis
        pulvinar. Cras sed turpis ut dui molestie blandit non non tellus. Donec
        vitae tincidunt enim, ac mollis risus. Etiam condimentum ante ac nunc
        placerat, id ornare nibh condimentum. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam vel
        sollicitudin ligula, at dignissim mi.
      </p>
    </Container>
  );
};

export default StyleGuide;
