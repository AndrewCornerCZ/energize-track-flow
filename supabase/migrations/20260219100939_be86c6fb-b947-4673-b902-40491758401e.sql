
CREATE TABLE public.wishlist (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.wishlist ENABLE ROW LEVEL SECURITY;

-- Kdokoliv může vložit svůj email (veřejný wishlist)
CREATE POLICY "Anyone can join wishlist"
ON public.wishlist
FOR INSERT
WITH CHECK (true);

-- Nikdo nemůže číst ostatní záznamy z frontendu
CREATE POLICY "No public reads"
ON public.wishlist
FOR SELECT
USING (false);
