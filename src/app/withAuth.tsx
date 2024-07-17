"use client";

import { createClient } from "@/utils/supabase/server";
import { Session } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { useEffect, useState, ComponentType } from "react";

const withAuth = <P extends object>(
  WrappedComponent: ComponentType<P>
): ComponentType<P> => {
  const WithAuthComponent = (props: P) => {
    const router = useRouter();
    const [session, setSession] = useState<Session | null>(null);

    const supabase = createClient();

    useEffect(() => {
      const checkSession = async () => {
        const {
          data: { session },
        } = await supabase.auth.getSession();
        if (!session) {
          router.push("/login");
        } else {
          setSession(session);
        }
      };

      checkSession();
    }, [router, supabase.auth]);

    if (!session) {
      return null; // Or a loading spinner
    }

    return <WrappedComponent {...props} />;
  };

  WithAuthComponent.displayName = `WithAuth(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;

  return WithAuthComponent;
};

export default withAuth;
