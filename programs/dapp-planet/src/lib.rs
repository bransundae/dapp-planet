use anchor_lang::prelude::*;

declare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS");

#[program]
pub mod dapp_planet {
    use super::*;

    pub fn deploy_testing_closed(ctx: Context<DeployTestingClosed>) -> Result<()> {
        Ok(())
    }

    pub fn deploy_testing_open(ctx: Context<DeployTestingOpen>) -> Result<()> {
        Ok(())
    }

    pub fn deploy_production(ctx: Context<DeployProduction>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct DeployTestingClosed {}

#[derive(Accounts)]
pub struct DeployTestingOpen {}

#[derive(Accounts)]
pub struct DeployProduction {}
