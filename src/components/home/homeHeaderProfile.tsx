import { motion } from 'framer-motion';

import { homeHeaderBadges } from '@/utils/homeHeaderBadges';

import profilePicture from '../../assets/profile-picture.png';
import { Badge } from '../ui/badge';

interface HomeHeaderProfileProps {
  badge: string;
}

export function HomeHeaderProfile() {
  return (
    <div>
      <section className="flex items-center gap-5">
        <motion.img
          initial={{
            opacity: 0,
            x: -40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.8,
            },
          }}
          viewport={{ once: true }}
          className="size-24"
          src={profilePicture}
          alt="Foto de perfil do Lucas Ricardo"
        />
        <div className="">
          <motion.span
            initial={{
              opacity: 0,
              y: -40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
              },
            }}
            viewport={{ once: true }}
            className="block text-2xl font-semibold text-foreground sm:text-3xl"
          >
            Lucas Ricardo
          </motion.span>
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
              },
            }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground sm:text-base"
          >
            Desenvolvedor Front-End
          </motion.p>
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.6,
              },
            }}
            viewport={{ once: true }}
            className="hidden flex-wrap items-center gap-1 pt-2 min-[420px]:flex"
          >
            {homeHeaderBadges.map((badge: HomeHeaderProfileProps, index) => {
              return (
                <motion.div
                  initial={{
                    opacity: 0,
                    x: -40,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 1,
                      delay: 0.1 * index,
                    },
                  }}
                  viewport={{ once: true }}
                  key={(badge.badge, index)}
                >
                  <Badge className="bg-muted text-foreground">
                    {badge.badge}
                  </Badge>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
      <div className="flex flex-wrap items-center gap-1 pt-3 min-[420px]:hidden">
        <Badge className="bg-muted font-normal text-foreground">ReactJS</Badge>
        <Badge className="bg-muted font-normal text-foreground">NextJS</Badge>
        <Badge className="bg-muted font-normal text-foreground">
          Typescript
        </Badge>
        <Badge className="bg-muted font-normal text-foreground">
          Javascript
        </Badge>
        <Badge className="bg-muted font-normal text-foreground">
          UX/UI Design
        </Badge>
      </div>
    </div>
  );
}
