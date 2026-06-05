import SiteImage from '../components/ui/SiteImage'
import ContactDetails from '../components/ui/ContactDetails'
import ScrollReveal from '../components/motion/ScrollReveal'
import Timeline from '../components/motion/Timeline'
import { milestones } from '../data/milestones'

export default function About() {
  return (
    <>
      <section className="py-16 md:py-24">
        <ScrollReveal className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h1 className="text-2xl font-bold text-navy md:text-3xl lg:text-4xl">
                品牌故事
              </h1>
              <p className="mt-6 text-base leading-relaxed text-navy/70 md:text-lg">
                宁波正盛音响科技有限公司于2009年在中国宁波创立，3000平方米的现代化厂区集生产研发于一体，超五十名专业人才在此协作。依托精密设备与先进技术，我们深度钻研低频振动器、配套功率放大器及整套音波体感系统，凭借自主研发与生产的硬核实力，构建了完善的产品体系，年产量可达80万+，年产值稳定在3000万+，产品畅销欧美国家，以高性能持续为全球用户带来沉浸式感官体验。
                公司核心产品品类丰富、适配多元场景，具体涵盖：低频振动器系列，功率覆盖全面，包含5瓦、10瓦、15瓦、20瓦、30瓦、60瓦多种规格，凭借出色的振动传导性与精准控频性能，可灵活适配各类配套设备；
                音波体感系列，涵盖音波体感按摩仪、音波体感沙发、音波体感床垫，音波振子，声波马达，扬声器震动，震动按摩，等产品，依托低频声波共振原理，实现深层放松、理疗舒缓等功效，广泛应用于智能家居、养生健康等多个领域；
                同时公司专注研发配套功率放大器，并具备整套体感系统研发能力，可提供从核心部件到完整系统的一体化研发与生产服务，完善产品生态，满足客户多元化、定制化需求。
                多年来，公司坚守研发与生产并重，将精密制造技术融入每一款产品，无论是多功率可选的低频振动器，还是贴合人体需求的音波体感产品，都经过严格检测，确保品质稳定。未来，我们将持续深耕低频振动与音波体感领域，依托现有产能优势与技术积累，不断丰富产品矩阵，为全球用户提供更优质的沉浸式感官与健康体验，助力智能家居、养生健康行业高质量发展。
              </p>
            </div>
            <SiteImage imageKey="about-factory" aspectRatio="aspect-[4/3]" />
          </div>
        </ScrollReveal>
      </section>

      <section id="contact" className="border-y border-gray-100 bg-gray-50 py-16 md:py-24">
        <ScrollReveal className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy md:text-3xl">联系我们</h2>
          <p className="mt-3 text-base text-navy/60 md:text-lg">
            欢迎联系正盛科技，获取专属体感技术方案
          </p>

          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h3 className="text-xl font-semibold text-navy md:text-2xl">联系信息</h3>
              <ContactDetails className="mt-8 space-y-6" />
            </div>
            <SiteImage imageKey="map-location" aspectRatio="aspect-[16/9]" className="rounded-xl" />
          </div>
        </ScrollReveal>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="mb-16 text-center text-2xl font-semibold text-navy md:text-3xl">
              发展里程碑
            </h2>
          </ScrollReveal>
          <Timeline items={milestones} />
        </div>
      </section>
    </>
  )
}
