-- J'ai créé des requêtes pour compter le nombre de NRP ayant
-- un nombre donné de D-mono.
-- Je l'ai fait en passant par la création d'une vue.
-- Exécuté sur la version de Norine avec 1164 peptides

create view compteD as 
	select id_peptide, count(*) as nbD from contient 
	where code like 'D-%' group by id_peptide;

-- Puis j'ai fait des comptages sur cette vue (pas très joli,
-- mais j'ai changé à la main la valeur du nbB=X en énumérant de 0 à 20)

select count(*) from compteD where nbD=3;

-- => 1165 - 749 = 415 NRP sans D-


-- Si je veux me limiter aux peptides curated :

create view compteD_cur as 
	select id_peptide, count(*) as nbD from contient 
	where code like 'D-%' and id_peptide in 
		(select id_peptide from peptide where statut like 'curated') 
	group by id_peptide;

select count(*) from compteD_cur where nbD=1;

-- 854 - 604 = 250 peptide curated sans D-
