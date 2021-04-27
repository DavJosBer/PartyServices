"""empty message

Revision ID: a8bcec26665c
Revises: ee55ea7c08fb
Create Date: 2021-04-26 17:50:52.357909

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'a8bcec26665c'
down_revision = 'ee55ea7c08fb'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('shop_cart', sa.Column('name', sa.String(length=250), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('shop_cart', 'name')
    # ### end Alembic commands ###