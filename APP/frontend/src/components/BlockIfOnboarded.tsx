import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import AppLoader from "./AppLoader";




const BlockIfOnboarded = ({ children }: { children: JSX.Element }) => {
  const [loading, setLoading] = useState(true);
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const check = async () => {
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        setAllowed(true);
        setLoading(false);
        return;
      }

      const { data: profile } = await supabase
        .from("user_profile")
        .select("onboarding_completed")
        .eq("id", user.id)
        .single();

      // SI EL ONBOARDING YA ESTÁ COMPLETADO → BLOQUEAR ENTRADA
      if (profile?.onboarding_completed) {
        setAllowed(false);
      } else {
        setAllowed(true);
      }

      setLoading(false);
    };

    check();
  }, []);

  if (loading) return <AppLoader />;


  if (!allowed) return <Navigate to="/home" replace />;

  return children;
};

export default BlockIfOnboarded;
