// import MainLayout from '../../layout/MainLayout';
import { motion } from 'framer-motion';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Home as HomeIcon, ShoppingCart, Users, FileText } from 'lucide-react';
import logoFull from '../../assets/logo/logo-full.svg';

// Placeholder cards/components
const HousingCard = ({ title }: { title: string }) => (
  <Card className="p-4 flex flex-col gap-2" aria-label="Housing Card">
    <div className="h-32 bg-gray-100 rounded-xl mb-2" />
    <h3 className="font-semibold text-lg">{title}</h3>
    <p className="text-muted-foreground">Near campus</p>
    <span className="inline-block px-2 py-1 rounded bg-green-100 text-green-700 text-xs">Available</span>
  </Card>
);
const ProductCard = ({ title }: { title: string }) => (
  <Card className="p-4 flex flex-col gap-2" aria-label="Product Card">
    <div className="h-32 bg-gray-100 rounded-xl mb-2" />
    <h3 className="font-semibold text-lg">{title}</h3>
    <p className="text-muted-foreground">Category: Electronics</p>
    <span className="inline-block px-2 py-1 rounded bg-blue-100 text-blue-700 text-xs">Escrow</span>
  </Card>
);
const RoommateProfileCard = ({ name }: { name: string }) => (
  <Card className="p-4 flex flex-col items-center gap-2 min-w-[200px]" aria-label="Roommate Profile Card">
    <div className="h-16 w-16 rounded-full bg-gray-200 mb-2" />
    <h3 className="font-semibold text-lg">{name}</h3>
    <p className="text-muted-foreground">Major: CS</p>
    <span className="inline-block px-2 py-1 rounded bg-teal-100 text-teal-700 text-xs">Match: 85%</span>
  </Card>
);
const AgreementCard = ({ title }: { title: string }) => (
  <Card className="p-4 flex flex-col gap-2" aria-label="Agreement Card">
    <h3 className="font-semibold text-lg">{title}</h3>
    <p className="text-muted-foreground">Status: Pending</p>
  <Button size="sm" variant="secondary" asChild><a href="#">View / Sign</a></Button>
  </Card>
);
const TestimonialCard = ({ name, quote }: { name: string; quote: string }) => (
  <Card className="p-4 flex flex-col items-center gap-2" aria-label="Testimonial Card">
    <div className="h-12 w-12 rounded-full bg-gray-200 mb-2" />
    <h3 className="font-semibold text-base">{name}</h3>
    <p className="text-muted-foreground text-center">“{quote}”</p>
  </Card>
);

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-primary/10 to-white py-16 flex flex-col items-center justify-center">
        <motion.img src={logoFull} alt="Verbaac Connect Logo" className="h-12 mb-4" initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, type: 'spring' }} />
        <motion.h1 className="text-3xl md:text-5xl font-bold text-center mb-4 font-[Poppins]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }}>Find housing, buy & sell, connect with roommates — all in one student hub.</motion.h1>
        <motion.div className="w-full max-w-xl mt-6 flex gap-2" initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.6 }}>
          <Input placeholder="Search housing, products, or roommates..." className="flex-1" />
          <Button variant="default">Search</Button>
        </motion.div>
        <div className="mt-8 flex gap-4">
          <Button variant="secondary" size="lg" asChild><a href="/housing">Explore Housing</a></Button>
          <Button variant="secondary" size="lg" asChild><a href="/marketplace">Browse Marketplace</a></Button>
        </div>
      </section>

      {/* Quick Search / Module Entry */}
      <section className="container mx-auto py-12">
        <h2 className="text-xl font-bold mb-6">Jump Into Modules</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 overflow-x-auto">
          {[{
            icon: <HomeIcon className="h-6 w-6 text-primary" />, title: 'Housing', desc: 'Find student-friendly homes.', link: '/housing'
          }, {
            icon: <ShoppingCart className="h-6 w-6 text-primary" />, title: 'Marketplace', desc: 'Buy & sell with escrow.', link: '/marketplace'
          }, {
            icon: <Users className="h-6 w-6 text-primary" />, title: 'Roommates', desc: 'Match with students.', link: '/roommates'
          }, {
            icon: <FileText className="h-6 w-6 text-primary" />, title: 'Agreements', desc: 'Digital rental contracts.', link: '/agreements'
          }].map((entry) => (
            <motion.a key={entry.title} href={entry.link} className="flex flex-col items-center p-6 rounded-2xl bg-white shadow transition-transform hover:shadow-lg hover:scale-105" whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
              {entry.icon}
              <span className="mt-2 font-semibold">{entry.title}</span>
              <span className="text-sm text-muted-foreground">{entry.desc}</span>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Housing Section */}
      <section className="container mx-auto py-12">
        <h2 className="text-xl font-bold mb-2">Find Your Student Housing</h2>
        <p className="text-muted-foreground mb-6">Affordable, nearby, and student-friendly homes.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Campus View", "Student Lodge", "Green Residence"].map((title, i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }} viewport={{ once: true }}>
              <HousingCard title={title} />
            </motion.div>
          ))}
        </div>
        <div className="mt-6">
          <Button variant="default" asChild><a href="/housing">View All Housing</a></Button>
        </div>
      </section>

      {/* Marketplace Section */}
      <section className="container mx-auto py-12">
        <h2 className="text-xl font-bold mb-2">Shop the Student Marketplace</h2>
        <p className="text-muted-foreground mb-6">Buy & sell items with escrow protection.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Laptop", "Textbooks", "Mini Fridge"].map((title, i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }} viewport={{ once: true }}>
              <ProductCard title={title} />
            </motion.div>
          ))}
        </div>
        <div className="mt-6">
          <Button variant="default" asChild><a href="/marketplace">Browse Marketplace</a></Button>
        </div>
      </section>

      {/* Roommates Section */}
      <section className="container mx-auto py-12">
        <h2 className="text-xl font-bold mb-2">Find the Perfect Roommate</h2>
        <p className="text-muted-foreground mb-6">Match with students based on preferences.</p>
        <div className="flex gap-6 overflow-x-auto pb-2">
          {["Ada", "Chidi", "Fatima"].map((name, i) => (
            <motion.div key={name} initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.2 }} viewport={{ once: true }}>
              <RoommateProfileCard name={name} />
            </motion.div>
          ))}
        </div>
        <div className="mt-6">
          <Button variant="default" asChild><a href="/roommates">Start Matching</a></Button>
        </div>
      </section>

      {/* Agreements Section */}
      <section className="container mx-auto py-12">
        <h2 className="text-xl font-bold mb-2">Digital Rental Agreements</h2>
        <p className="text-muted-foreground mb-6">Secure contracts for peace of mind.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {["Lease Agreement – Apartment 12B", "Rental Agreement – Student Lodge"].map((title, i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }} viewport={{ once: true }}>
              <AgreementCard title={title} />
            </motion.div>
          ))}
        </div>
        <div className="mt-6">
          <Button variant="default" asChild><a href="/agreements">Create Agreement</a></Button>
        </div>
      </section>

      {/* Testimonials / Trust Section */}
      <section className="container mx-auto py-12">
        <h2 className="text-xl font-bold mb-2">Trusted by Students Everywhere</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {[
            { name: "Ada U.", quote: "Verbaac made finding housing so easy!" },
            { name: "Chidi O.", quote: "I sold my old laptop in a day." },
            { name: "Fatima S.", quote: "Roommate matching was spot on!" }
          ].map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: i * 0.2 }} viewport={{ once: true }}>
              <TestimonialCard name={t.name} quote={t.quote} />
            </motion.div>
          ))}
        </div>
        {/* Partner logos placeholder */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 items-center justify-center">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-8 bg-gray-100 rounded" />
          ))}
        </div>
      </section>

      {/* Call-to-Action Banner */}
      <section className="w-full py-12 bg-gradient-to-r from-primary to-secondary flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-white mb-4">Get Started with Verbaac Connect Today</h2>
        <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
          <Button variant="secondary" size="lg" asChild><a href="/register">Join Now</a></Button>
        </motion.div>
      </section>
    </>
  );
}
