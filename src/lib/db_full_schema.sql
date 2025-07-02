--
-- PostgreSQL database dump
--

-- Dumped from database version 17.5
-- Dumped by pg_dump version 17.5

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: exercise_logs; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.exercise_logs (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    user_id uuid,
    exercise_id uuid,
    date date NOT NULL,
    form_quality integer,
    notes text,
    created_at timestamp with time zone DEFAULT now(),
    CONSTRAINT exercise_logs_form_quality_check CHECK (((form_quality >= 1) AND (form_quality <= 10)))
);


--
-- Name: exercises; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.exercises (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    name text NOT NULL,
    muscle_group text,
    created_at timestamp with time zone DEFAULT now()
);


--
-- Name: sets; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sets (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    log_id uuid,
    set_number integer NOT NULL,
    weight numeric NOT NULL,
    reps integer NOT NULL
);


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    email text NOT NULL,
    username text,
    password text NOT NULL
);


--
-- Data for Name: exercise_logs; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.exercise_logs (id, user_id, exercise_id, date, form_quality, notes, created_at) FROM stdin;
\.


--
-- Data for Name: exercises; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.exercises (id, name, muscle_group, created_at) FROM stdin;
9b8f7b1a-5b1c-4703-8003-ed8413aa1c35	Biceps Curls	Biceps	2025-06-29 18:37:47.048629+00
70d73dad-953f-4899-a3da-28168895c90d	Hammer Curls	Biceps	2025-06-29 18:37:47.048629+00
0d439a14-a50e-49cd-8f0e-5efad6868acc	Triceps Extensions	Triceps	2025-06-29 18:37:47.048629+00
8b02e01b-2845-4cd7-aa35-874a0d2c4db5	Skull Crushers	Triceps	2025-06-29 18:37:47.048629+00
85022362-2385-4fe9-9724-e5fd40205e45	Triceps Dips	Triceps	2025-06-29 18:37:47.048629+00
42377e83-33df-4a7e-b9ff-4372ca36e93a	Close-Grip Bench Press	Triceps	2025-06-29 18:37:47.048629+00
24298962-6ad9-4d65-b35b-d353fc17898c	Shoulder Press	Shoulders	2025-06-29 18:37:47.048629+00
c2e44544-5336-4bc0-b836-499ffa34fb2d	Lateral Raises	Shoulders	2025-06-29 18:37:47.048629+00
647bacbb-9c8d-4641-9bd8-6b7e57594ff5	Front Raises	Shoulders	2025-06-29 18:37:47.048629+00
822fe6c0-bcae-4a85-a125-ab53308e1594	Arnold Press	Shoulders	2025-06-29 18:37:47.048629+00
26b6c81c-3175-41aa-b32b-051bb246147d	Chest Press	Chest	2025-06-29 18:37:47.048629+00
4f88ff92-f5bc-4d38-8c73-d7b6359b4548	Pushups	Chest	2025-06-29 18:37:47.048629+00
49735109-2ad7-4a37-b3a1-62b640deaa3e	Incline Bench Press	Chest	2025-06-29 18:37:47.048629+00
9aea95b7-f921-4f58-916c-31bfd0d0ec6b	Cable Flys	Chest	2025-06-29 18:37:47.048629+00
717750d8-fb20-4939-84e3-ed22dbeda50a	Pullups	Back	2025-06-29 18:37:47.048629+00
9fb25ee0-d7ea-496e-a6ef-b4178ae4d39e	Bent Over Rows	Back	2025-06-29 18:37:47.048629+00
fc4d6d26-5203-4180-a9ef-49195dc363bd	Lat Pulldowns	Back	2025-06-29 18:37:47.048629+00
469d53e9-2f9c-4cce-b36c-782e47f01620	Seated Rows	Back	2025-06-29 18:37:47.048629+00
ec88f254-5053-4ccf-baf5-4ca89cefae07	Situps	Core	2025-06-29 18:37:47.048629+00
a3ba9fd1-193b-4536-b4db-e1b2462fc46e	Plank	Core	2025-06-29 18:37:47.048629+00
49f41d5c-8312-4f12-83b0-caf777ec2889	Leg Raises	Core	2025-06-29 18:37:47.048629+00
ff830dae-ef82-4a57-8fe2-d05e805fa2cb	Squats	Legs	2025-06-29 18:37:47.048629+00
42384e53-5236-4e34-9a70-8cb0340cfd47	Leg Press	Legs	2025-06-29 18:37:47.048629+00
8f70b2a8-58fd-42bd-9114-3c5a2dd1730f	Lunges	Legs	2025-06-29 18:37:47.048629+00
c4b0001c-d8de-46ae-a80d-8c80cd9ce2dc	Romanian Deadlifts	Legs	2025-06-29 18:37:47.048629+00
9b24023a-0880-4b51-b1ff-9c587268800a	Leg Extensions	Legs	2025-06-29 18:37:47.048629+00
a05855fa-d1b9-4586-92b2-674ea116d3ad	Hamstring Curls	Legs	2025-06-29 18:37:47.048629+00
ea545a95-2da8-430a-ab95-327b8918da40	Calf Raises	Legs	2025-06-29 18:37:47.048629+00
\.


--
-- Data for Name: sets; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.sets (id, log_id, set_number, weight, reps) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.users (id, email, username, password) FROM stdin;
09db449e-7df9-4bd9-a09f-b05420889f5a	admin@admin.com	admin	admin
\.


--
-- Name: exercise_logs exercise_logs_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.exercise_logs
    ADD CONSTRAINT exercise_logs_pkey PRIMARY KEY (id);


--
-- Name: exercises exercises_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.exercises
    ADD CONSTRAINT exercises_name_key UNIQUE (name);


--
-- Name: exercises exercises_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.exercises
    ADD CONSTRAINT exercises_pkey PRIMARY KEY (id);


--
-- Name: sets sets_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sets
    ADD CONSTRAINT sets_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users users_username_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);


--
-- Name: exercise_logs exercise_logs_exercise_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.exercise_logs
    ADD CONSTRAINT exercise_logs_exercise_id_fkey FOREIGN KEY (exercise_id) REFERENCES public.exercises(id);


--
-- Name: exercise_logs exercise_logs_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.exercise_logs
    ADD CONSTRAINT exercise_logs_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: sets sets_log_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sets
    ADD CONSTRAINT sets_log_id_fkey FOREIGN KEY (log_id) REFERENCES public.exercise_logs(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

